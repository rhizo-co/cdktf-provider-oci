# `dataOciIdentityDomainsSocialIdentityProviders` Submodule <a name="`dataOciIdentityDomainsSocialIdentityProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers oci_identity_domains_social_identity_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProviders;

DataOciIdentityDomainsSocialIdentityProviders.Builder.create(Construct scope, java.lang.String id)
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
//  .resourceTypeSchemaVersion(java.lang.String)
//  .socialIdentityProviderCount(java.lang.Number)
//  .socialIdentityProviderFilter(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderCount">socialIdentityProviderCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderFilter">socialIdentityProviderFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}.

---

##### `socialIdentityProviderCount`<sup>Optional</sup> <a name="socialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}.

---

##### `socialIdentityProviderFilter`<sup>Optional</sup> <a name="socialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.socialIdentityProviderFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount">resetSocialIdentityProviderCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter">resetSocialIdentityProviderFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId"></a>

```java
public void resetId()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSocialIdentityProviderCount` <a name="resetSocialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount"></a>

```java
public void resetSocialIdentityProviderCount()
```

##### `resetSocialIdentityProviderFilter` <a name="resetSocialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter"></a>

```java
public void resetSocialIdentityProviderFilter()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProviders;

DataOciIdentityDomainsSocialIdentityProviders.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProviders;

DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProviders;

DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProviders;

DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsSocialIdentityProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsSocialIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSocialIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders">socialIdentityProviders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput">socialIdentityProviderCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput">socialIdentityProviderFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount">socialIdentityProviderCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter">socialIdentityProviderFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `socialIdentityProviders`<sup>Required</sup> <a name="socialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList getSocialIdentityProviders();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `socialIdentityProviderCountInput`<sup>Optional</sup> <a name="socialIdentityProviderCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput"></a>

```java
public java.lang.Number getSocialIdentityProviderCountInput();
```

- *Type:* java.lang.Number

---

##### `socialIdentityProviderFilterInput`<sup>Optional</sup> <a name="socialIdentityProviderFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput"></a>

```java
public java.lang.String getSocialIdentityProviderFilterInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `socialIdentityProviderCount`<sup>Required</sup> <a name="socialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount"></a>

```java
public java.lang.Number getSocialIdentityProviderCount();
```

- *Type:* java.lang.Number

---

##### `socialIdentityProviderFilter`<sup>Required</sup> <a name="socialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter"></a>

```java
public java.lang.String getSocialIdentityProviderFilter();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSocialIdentityProvidersConfig <a name="DataOciIdentityDomainsSocialIdentityProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersConfig;

DataOciIdentityDomainsSocialIdentityProvidersConfig.builder()
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
//  .resourceTypeSchemaVersion(java.lang.String)
//  .socialIdentityProviderCount(java.lang.Number)
//  .socialIdentityProviderFilter(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount">socialIdentityProviderCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter">socialIdentityProviderFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}.

---

##### `socialIdentityProviderCount`<sup>Optional</sup> <a name="socialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount"></a>

```java
public java.lang.Number getSocialIdentityProviderCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}.

---

##### `socialIdentityProviderFilter`<sup>Optional</sup> <a name="socialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter"></a>

```java
public java.lang.String getSocialIdentityProviderFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}.

---

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders;

DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders.builder()
    .build();
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy;

DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy;

DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups;

DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups.builder()
    .build();
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta;

DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta.builder()
    .build();
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings;

DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings.builder()
    .build();
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags;

DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope">adminScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl">authzUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute">idAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl">refreshTokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled">registrationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings">relayIdpParamMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin">showOnLogin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled"></a>

```java
public IResolvable getAccountLinkingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `adminScope`<sup>Required</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope"></a>

```java
public java.util.List<java.lang.String> getAdminScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `authzUrl`<sup>Required</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl"></a>

```java
public java.lang.String getAuthzUrl();
```

- *Type:* java.lang.String

---

##### `autoRedirectEnabled`<sup>Required</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled"></a>

```java
public IResolvable getAutoRedirectEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clientCredentialInPayload`<sup>Required</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload"></a>

```java
public IResolvable getClientCredentialInPayload();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clockSkewInSeconds`<sup>Required</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds"></a>

```java
public java.lang.Number getClockSkewInSeconds();
```

- *Type:* java.lang.Number

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idAttribute`<sup>Required</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute"></a>

```java
public java.lang.String getIdAttribute();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jitProvAssignedGroups`<sup>Required</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList getJitProvAssignedGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a>

---

##### `jitProvGroupStaticListEnabled`<sup>Required</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled"></a>

```java
public IResolvable getJitProvGroupStaticListEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `refreshTokenUrl`<sup>Required</sup> <a name="refreshTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl"></a>

```java
public java.lang.String getRefreshTokenUrl();
```

- *Type:* java.lang.String

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled"></a>

```java
public IResolvable getRegistrationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `relayIdpParamMappings`<sup>Required</sup> <a name="relayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList getRelayIdpParamMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a>

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName"></a>

```java
public java.lang.String getServiceProviderName();
```

- *Type:* java.lang.String

---

##### `showOnLogin`<sup>Required</sup> <a name="showOnLogin" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin"></a>

```java
public IResolvable getShowOnLogin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `socialJitProvisioningEnabled`<sup>Required</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled"></a>

```java
public IResolvable getSocialJitProvisioningEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey">relayParamKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue">relayParamValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relayParamKey`<sup>Required</sup> <a name="relayParamKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```java
public java.lang.String getRelayParamKey();
```

- *Type:* java.lang.String

---

##### `relayParamValue`<sup>Required</sup> <a name="relayParamValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```java
public java.lang.String getRelayParamValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_social_identity_providers.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference;

new DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a>

---



