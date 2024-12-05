# `dataOciIdentityDomainsMySmtpCredentials` Submodule <a name="`dataOciIdentityDomainsMySmtpCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMySmtpCredentials <a name="DataOciIdentityDomainsMySmtpCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials oci_identity_domains_my_smtp_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentials;

DataOciIdentityDomainsMySmtpCredentials.Builder.create(Construct scope, java.lang.String id)
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
//  .mySmtpCredentialCount(java.lang.Number)
//  .mySmtpCredentialFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#idcs_endpoint DataOciIdentityDomainsMySmtpCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#authorization DataOciIdentityDomainsMySmtpCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#compartment_id DataOciIdentityDomainsMySmtpCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#id DataOciIdentityDomainsMySmtpCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.mySmtpCredentialCount">mySmtpCredentialCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_count DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.mySmtpCredentialFilter">mySmtpCredentialFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_filter DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#resource_type_schema_version DataOciIdentityDomainsMySmtpCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_by DataOciIdentityDomainsMySmtpCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_order DataOciIdentityDomainsMySmtpCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#start_index DataOciIdentityDomainsMySmtpCredentials#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#idcs_endpoint DataOciIdentityDomainsMySmtpCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#authorization DataOciIdentityDomainsMySmtpCredentials#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#compartment_id DataOciIdentityDomainsMySmtpCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#id DataOciIdentityDomainsMySmtpCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mySmtpCredentialCount`<sup>Optional</sup> <a name="mySmtpCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.mySmtpCredentialCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_count DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_count}.

---

##### `mySmtpCredentialFilter`<sup>Optional</sup> <a name="mySmtpCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.mySmtpCredentialFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_filter DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#resource_type_schema_version DataOciIdentityDomainsMySmtpCredentials#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_by DataOciIdentityDomainsMySmtpCredentials#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_order DataOciIdentityDomainsMySmtpCredentials#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#start_index DataOciIdentityDomainsMySmtpCredentials#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialCount">resetMySmtpCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialFilter">resetMySmtpCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetId"></a>

```java
public void resetId()
```

##### `resetMySmtpCredentialCount` <a name="resetMySmtpCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialCount"></a>

```java
public void resetMySmtpCredentialCount()
```

##### `resetMySmtpCredentialFilter` <a name="resetMySmtpCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetMySmtpCredentialFilter"></a>

```java
public void resetMySmtpCredentialFilter()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMySmtpCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentials;

DataOciIdentityDomainsMySmtpCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentials;

DataOciIdentityDomainsMySmtpCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentials;

DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentials;

DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMySmtpCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsMySmtpCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsMySmtpCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMySmtpCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentials">mySmtpCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCountInput">mySmtpCredentialCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilterInput">mySmtpCredentialFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCount">mySmtpCredentialCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilter">mySmtpCredentialFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `mySmtpCredentials`<sup>Required</sup> <a name="mySmtpCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentials"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList getMySmtpCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mySmtpCredentialCountInput`<sup>Optional</sup> <a name="mySmtpCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCountInput"></a>

```java
public java.lang.Number getMySmtpCredentialCountInput();
```

- *Type:* java.lang.Number

---

##### `mySmtpCredentialFilterInput`<sup>Optional</sup> <a name="mySmtpCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilterInput"></a>

```java
public java.lang.String getMySmtpCredentialFilterInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `mySmtpCredentialCount`<sup>Required</sup> <a name="mySmtpCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialCount"></a>

```java
public java.lang.Number getMySmtpCredentialCount();
```

- *Type:* java.lang.Number

---

##### `mySmtpCredentialFilter`<sup>Required</sup> <a name="mySmtpCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.mySmtpCredentialFilter"></a>

```java
public java.lang.String getMySmtpCredentialFilter();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMySmtpCredentialsConfig <a name="DataOciIdentityDomainsMySmtpCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsConfig;

DataOciIdentityDomainsMySmtpCredentialsConfig.builder()
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
//  .mySmtpCredentialCount(java.lang.Number)
//  .mySmtpCredentialFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#idcs_endpoint DataOciIdentityDomainsMySmtpCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#authorization DataOciIdentityDomainsMySmtpCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#compartment_id DataOciIdentityDomainsMySmtpCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#id DataOciIdentityDomainsMySmtpCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialCount">mySmtpCredentialCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_count DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialFilter">mySmtpCredentialFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_filter DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#resource_type_schema_version DataOciIdentityDomainsMySmtpCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_by DataOciIdentityDomainsMySmtpCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_order DataOciIdentityDomainsMySmtpCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#start_index DataOciIdentityDomainsMySmtpCredentials#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#idcs_endpoint DataOciIdentityDomainsMySmtpCredentials#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#authorization DataOciIdentityDomainsMySmtpCredentials#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#compartment_id DataOciIdentityDomainsMySmtpCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#id DataOciIdentityDomainsMySmtpCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mySmtpCredentialCount`<sup>Optional</sup> <a name="mySmtpCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialCount"></a>

```java
public java.lang.Number getMySmtpCredentialCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_count DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_count}.

---

##### `mySmtpCredentialFilter`<sup>Optional</sup> <a name="mySmtpCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.mySmtpCredentialFilter"></a>

```java
public java.lang.String getMySmtpCredentialFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#my_smtp_credential_filter DataOciIdentityDomainsMySmtpCredentials#my_smtp_credential_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#resource_type_schema_version DataOciIdentityDomainsMySmtpCredentials#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_by DataOciIdentityDomainsMySmtpCredentials#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#sort_order DataOciIdentityDomainsMySmtpCredentials#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_smtp_credentials#start_index DataOciIdentityDomainsMySmtpCredentials#start_index}.

---

### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials;

DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials.builder()
    .build();
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy;

DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy;

DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta;

DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta.builder()
    .build();
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags;

DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags.builder()
    .build();
```


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser;

DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.get"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.get"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMeta</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.user"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList getUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList</a>

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentials</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.get"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsTags</a>

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.get"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference <a name="DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_my_smtp_credentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference;

new DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUserOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMySmtpCredentials.DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser">DataOciIdentityDomainsMySmtpCredentialsMySmtpCredentialsUser</a>

---



