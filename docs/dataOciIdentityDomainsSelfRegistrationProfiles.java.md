# `dataOciIdentityDomainsSelfRegistrationProfiles` Submodule <a name="`dataOciIdentityDomainsSelfRegistrationProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles oci_identity_domains_self_registration_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfiles;

DataOciIdentityDomainsSelfRegistrationProfiles.Builder.create(Construct scope, java.lang.String id)
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
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .compartmentId(java.lang.String)
//  .id(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .selfRegistrationProfileCount(java.lang.Number)
//  .selfRegistrationProfileFilter(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.selfRegistrationProfileCount">selfRegistrationProfileCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.selfRegistrationProfileFilter">selfRegistrationProfileFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}.

---

##### `selfRegistrationProfileCount`<sup>Optional</sup> <a name="selfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.selfRegistrationProfileCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}.

---

##### `selfRegistrationProfileFilter`<sup>Optional</sup> <a name="selfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.selfRegistrationProfileFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount">resetSelfRegistrationProfileCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter">resetSelfRegistrationProfileFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId"></a>

```java
public void resetId()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSelfRegistrationProfileCount` <a name="resetSelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount"></a>

```java
public void resetSelfRegistrationProfileCount()
```

##### `resetSelfRegistrationProfileFilter` <a name="resetSelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter"></a>

```java
public void resetSelfRegistrationProfileFilter()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfiles;

DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfiles;

DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfiles;

DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfiles;

DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsSelfRegistrationProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsSelfRegistrationProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSelfRegistrationProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles">selfRegistrationProfiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput">selfRegistrationProfileCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput">selfRegistrationProfileFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount">selfRegistrationProfileCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter">selfRegistrationProfileFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfRegistrationProfiles`<sup>Required</sup> <a name="selfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList getSelfRegistrationProfiles();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `selfRegistrationProfileCountInput`<sup>Optional</sup> <a name="selfRegistrationProfileCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput"></a>

```java
public java.lang.Number getSelfRegistrationProfileCountInput();
```

- *Type:* java.lang.Number

---

##### `selfRegistrationProfileFilterInput`<sup>Optional</sup> <a name="selfRegistrationProfileFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput"></a>

```java
public java.lang.String getSelfRegistrationProfileFilterInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `selfRegistrationProfileCount`<sup>Required</sup> <a name="selfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount"></a>

```java
public java.lang.Number getSelfRegistrationProfileCount();
```

- *Type:* java.lang.Number

---

##### `selfRegistrationProfileFilter`<sup>Required</sup> <a name="selfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter"></a>

```java
public java.lang.String getSelfRegistrationProfileFilter();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesConfig <a name="DataOciIdentityDomainsSelfRegistrationProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig;

DataOciIdentityDomainsSelfRegistrationProfilesConfig.builder()
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
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .compartmentId(java.lang.String)
//  .id(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .selfRegistrationProfileCount(java.lang.Number)
//  .selfRegistrationProfileFilter(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount">selfRegistrationProfileCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter">selfRegistrationProfileFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}.

---

##### `selfRegistrationProfileCount`<sup>Optional</sup> <a name="selfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount"></a>

```java
public java.lang.Number getSelfRegistrationProfileCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}.

---

##### `selfRegistrationProfileFilter`<sup>Optional</sup> <a name="selfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter"></a>

```java
public java.lang.String getSelfRegistrationProfileFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}.

---

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags.builder()
    .build();
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes;

DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired">activationEmailRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText">afterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText">consentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent">consentTextPresent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups">defaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains">disallowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName">displayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate">emailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo">footerLogo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText">footerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo">headerLogo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText">headerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid">numberOfDaysRedirectUrlIsValid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage">showOnLoginPage</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes">userAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activationEmailRequired`<sup>Required</sup> <a name="activationEmailRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired"></a>

```java
public IResolvable getActivationEmailRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `afterSubmitText`<sup>Required</sup> <a name="afterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList getAfterSubmitText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a>

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `consentText`<sup>Required</sup> <a name="consentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList getConsentText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a>

---

##### `consentTextPresent`<sup>Required</sup> <a name="consentTextPresent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent"></a>

```java
public IResolvable getConsentTextPresent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `defaultGroups`<sup>Required</sup> <a name="defaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList getDefaultGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `disallowedEmailDomains`<sup>Required</sup> <a name="disallowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getDisallowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList getDisplayName();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a>

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList getEmailTemplate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `footerLogo`<sup>Required</sup> <a name="footerLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo"></a>

```java
public java.lang.String getFooterLogo();
```

- *Type:* java.lang.String

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList getFooterText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a>

---

##### `headerLogo`<sup>Required</sup> <a name="headerLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo"></a>

```java
public java.lang.String getHeaderLogo();
```

- *Type:* java.lang.String

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList getHeaderText();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="numberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid"></a>

```java
public java.lang.Number getNumberOfDaysRedirectUrlIsValid();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `showOnLoginPage`<sup>Required</sup> <a name="showOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage"></a>

```java
public IResolvable getShowOnLoginPage();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `userAttributes`<sup>Required</sup> <a name="userAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList getUserAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_self_registration_profiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference;

new DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable">deletable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName">fullyQualifiedAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber">seqNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable"></a>

```java
public IResolvable getDeletable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `fullyQualifiedAttributeName`<sup>Required</sup> <a name="fullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```java
public java.lang.String getFullyQualifiedAttributeName();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `seqNumber`<sup>Required</sup> <a name="seqNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber"></a>

```java
public java.lang.Number getSeqNumber();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a>

---



