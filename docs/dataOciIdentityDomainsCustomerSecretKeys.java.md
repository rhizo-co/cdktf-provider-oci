# `dataOciIdentityDomainsCustomerSecretKeys` Submodule <a name="`dataOciIdentityDomainsCustomerSecretKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsCustomerSecretKeys <a name="DataOciIdentityDomainsCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys oci_identity_domains_customer_secret_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeys;

DataOciIdentityDomainsCustomerSecretKeys.Builder.create(Construct scope, java.lang.String id)
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
//  .customerSecretKeyCount(java.lang.Number)
//  .customerSecretKeyFilter(java.lang.String)
//  .id(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyCount">customerSecretKeyCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyFilter">customerSecretKeyFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}.

---

##### `customerSecretKeyCount`<sup>Optional</sup> <a name="customerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}.

---

##### `customerSecretKeyFilter`<sup>Optional</sup> <a name="customerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.customerSecretKeyFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyCount">resetCustomerSecretKeyCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyFilter">resetCustomerSecretKeyFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetCustomerSecretKeyCount` <a name="resetCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyCount"></a>

```java
public void resetCustomerSecretKeyCount()
```

##### `resetCustomerSecretKeyFilter` <a name="resetCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyFilter"></a>

```java
public void resetCustomerSecretKeyFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetId"></a>

```java
public void resetId()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsCustomerSecretKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeys;

DataOciIdentityDomainsCustomerSecretKeys.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeys;

DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeys;

DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeys;

DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsCustomerSecretKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsCustomerSecretKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsCustomerSecretKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsCustomerSecretKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeys">customerSecretKeys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCountInput">customerSecretKeyCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilterInput">customerSecretKeyFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCount">customerSecretKeyCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilter">customerSecretKeyFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `customerSecretKeys`<sup>Required</sup> <a name="customerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeys"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList getCustomerSecretKeys();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `customerSecretKeyCountInput`<sup>Optional</sup> <a name="customerSecretKeyCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCountInput"></a>

```java
public java.lang.Number getCustomerSecretKeyCountInput();
```

- *Type:* java.lang.Number

---

##### `customerSecretKeyFilterInput`<sup>Optional</sup> <a name="customerSecretKeyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilterInput"></a>

```java
public java.lang.String getCustomerSecretKeyFilterInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `customerSecretKeyCount`<sup>Required</sup> <a name="customerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCount"></a>

```java
public java.lang.Number getCustomerSecretKeyCount();
```

- *Type:* java.lang.Number

---

##### `customerSecretKeyFilter`<sup>Required</sup> <a name="customerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilter"></a>

```java
public java.lang.String getCustomerSecretKeyFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsCustomerSecretKeysConfig <a name="DataOciIdentityDomainsCustomerSecretKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysConfig;

DataOciIdentityDomainsCustomerSecretKeysConfig.builder()
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
//  .customerSecretKeyCount(java.lang.Number)
//  .customerSecretKeyFilter(java.lang.String)
//  .id(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyCount">customerSecretKeyCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyFilter">customerSecretKeyFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}.

---

##### `customerSecretKeyCount`<sup>Optional</sup> <a name="customerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyCount"></a>

```java
public java.lang.Number getCustomerSecretKeyCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}.

---

##### `customerSecretKeyFilter`<sup>Optional</sup> <a name="customerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyFilter"></a>

```java
public java.lang.String getCustomerSecretKeyFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}.

---

### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys;

DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys.builder()
    .build();
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy;

DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy;

DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta;

DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta.builder()
    .build();
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags;

DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags.builder()
    .build();
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser;

DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.builder()
    .build();
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser;

DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `urnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList getUrnietfparamsscimschemasoracleidcsextensionselfChangeUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.user"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList getUser();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">allowSelfChange</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowSelfChange`<sup>Required</sup> <a name="allowSelfChange" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```java
public IResolvable getAllowSelfChange();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_customer_secret_keys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference;

new DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser</a>

---



