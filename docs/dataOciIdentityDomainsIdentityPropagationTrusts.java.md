# `dataOciIdentityDomainsIdentityPropagationTrusts` Submodule <a name="`dataOciIdentityDomainsIdentityPropagationTrusts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentityPropagationTrusts <a name="DataOciIdentityDomainsIdentityPropagationTrusts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts oci_identity_domains_identity_propagation_trusts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrusts;

DataOciIdentityDomainsIdentityPropagationTrusts.Builder.create(Construct scope, java.lang.String id)
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
//  .identityPropagationTrustCount(java.lang.Number)
//  .identityPropagationTrustFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrusts#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attributes DataOciIdentityDomainsIdentityPropagationTrusts#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attribute_sets DataOciIdentityDomainsIdentityPropagationTrusts#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#authorization DataOciIdentityDomainsIdentityPropagationTrusts#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#compartment_id DataOciIdentityDomainsIdentityPropagationTrusts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#id DataOciIdentityDomainsIdentityPropagationTrusts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.identityPropagationTrustCount">identityPropagationTrustCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_count DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.identityPropagationTrustFilter">identityPropagationTrustFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_filter DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrusts#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_by DataOciIdentityDomainsIdentityPropagationTrusts#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_order DataOciIdentityDomainsIdentityPropagationTrusts#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#start_index DataOciIdentityDomainsIdentityPropagationTrusts#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrusts#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attributes DataOciIdentityDomainsIdentityPropagationTrusts#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attribute_sets DataOciIdentityDomainsIdentityPropagationTrusts#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#authorization DataOciIdentityDomainsIdentityPropagationTrusts#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#compartment_id DataOciIdentityDomainsIdentityPropagationTrusts#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#id DataOciIdentityDomainsIdentityPropagationTrusts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityPropagationTrustCount`<sup>Optional</sup> <a name="identityPropagationTrustCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.identityPropagationTrustCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_count DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_count}.

---

##### `identityPropagationTrustFilter`<sup>Optional</sup> <a name="identityPropagationTrustFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.identityPropagationTrustFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_filter DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrusts#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_by DataOciIdentityDomainsIdentityPropagationTrusts#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_order DataOciIdentityDomainsIdentityPropagationTrusts#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#start_index DataOciIdentityDomainsIdentityPropagationTrusts#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustCount">resetIdentityPropagationTrustCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustFilter">resetIdentityPropagationTrustFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityPropagationTrustCount` <a name="resetIdentityPropagationTrustCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustCount"></a>

```java
public void resetIdentityPropagationTrustCount()
```

##### `resetIdentityPropagationTrustFilter` <a name="resetIdentityPropagationTrustFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustFilter"></a>

```java
public void resetIdentityPropagationTrustFilter()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentityPropagationTrusts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrusts;

DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrusts;

DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrusts;

DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrusts;

DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentityPropagationTrusts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsIdentityPropagationTrusts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsIdentityPropagationTrusts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentityPropagationTrusts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrusts">identityPropagationTrusts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCountInput">identityPropagationTrustCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilterInput">identityPropagationTrustFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCount">identityPropagationTrustCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilter">identityPropagationTrustFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `identityPropagationTrusts`<sup>Required</sup> <a name="identityPropagationTrusts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrusts"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList getIdentityPropagationTrusts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityPropagationTrustCountInput`<sup>Optional</sup> <a name="identityPropagationTrustCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCountInput"></a>

```java
public java.lang.Number getIdentityPropagationTrustCountInput();
```

- *Type:* java.lang.Number

---

##### `identityPropagationTrustFilterInput`<sup>Optional</sup> <a name="identityPropagationTrustFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilterInput"></a>

```java
public java.lang.String getIdentityPropagationTrustFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `identityPropagationTrustCount`<sup>Required</sup> <a name="identityPropagationTrustCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCount"></a>

```java
public java.lang.Number getIdentityPropagationTrustCount();
```

- *Type:* java.lang.Number

---

##### `identityPropagationTrustFilter`<sup>Required</sup> <a name="identityPropagationTrustFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilter"></a>

```java
public java.lang.String getIdentityPropagationTrustFilter();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentityPropagationTrustsConfig <a name="DataOciIdentityDomainsIdentityPropagationTrustsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig;

DataOciIdentityDomainsIdentityPropagationTrustsConfig.builder()
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
//  .identityPropagationTrustCount(java.lang.Number)
//  .identityPropagationTrustFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrusts#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attributes DataOciIdentityDomainsIdentityPropagationTrusts#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attribute_sets DataOciIdentityDomainsIdentityPropagationTrusts#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#authorization DataOciIdentityDomainsIdentityPropagationTrusts#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#compartment_id DataOciIdentityDomainsIdentityPropagationTrusts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#id DataOciIdentityDomainsIdentityPropagationTrusts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustCount">identityPropagationTrustCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_count DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustFilter">identityPropagationTrustFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_filter DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrusts#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_by DataOciIdentityDomainsIdentityPropagationTrusts#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_order DataOciIdentityDomainsIdentityPropagationTrusts#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#start_index DataOciIdentityDomainsIdentityPropagationTrusts#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrusts#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attributes DataOciIdentityDomainsIdentityPropagationTrusts#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attribute_sets DataOciIdentityDomainsIdentityPropagationTrusts#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#authorization DataOciIdentityDomainsIdentityPropagationTrusts#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#compartment_id DataOciIdentityDomainsIdentityPropagationTrusts#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#id DataOciIdentityDomainsIdentityPropagationTrusts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityPropagationTrustCount`<sup>Optional</sup> <a name="identityPropagationTrustCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustCount"></a>

```java
public java.lang.Number getIdentityPropagationTrustCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_count DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_count}.

---

##### `identityPropagationTrustFilter`<sup>Optional</sup> <a name="identityPropagationTrustFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustFilter"></a>

```java
public java.lang.String getIdentityPropagationTrustFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_filter DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrusts#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_by DataOciIdentityDomainsIdentityPropagationTrusts#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_order DataOciIdentityDomainsIdentityPropagationTrusts#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#start_index DataOciIdentityDomainsIdentityPropagationTrusts#start_index}.

---

### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts;

DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts.builder()
    .build();
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy;

DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy;

DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers;

DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers.builder()
    .build();
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab;

DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab.builder()
    .build();
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta;

DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta.builder()
    .build();
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags;

DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.get"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.get"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretOcid">secretOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretOcid`<sup>Required</sup> <a name="secretOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretOcid"></a>

```java
public java.lang.String getSecretOcid();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretVersion"></a>

```java
public java.lang.Number getSecretVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.get"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.get"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.allowImpersonation">allowImpersonation</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimName">clientClaimName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimValues">clientClaimValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clockSkewSeconds">clockSkewSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.impersonationServiceUsers">impersonationServiceUsers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.keytab">keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.oauthClients">oauthClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicCertificate">publicCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicKeyEndpoint">publicKeyEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectClaimName">subjectClaimName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectMappingAttribute">subjectMappingAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectType">subjectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowImpersonation`<sup>Required</sup> <a name="allowImpersonation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.allowImpersonation"></a>

```java
public IResolvable getAllowImpersonation();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `clientClaimName`<sup>Required</sup> <a name="clientClaimName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimName"></a>

```java
public java.lang.String getClientClaimName();
```

- *Type:* java.lang.String

---

##### `clientClaimValues`<sup>Required</sup> <a name="clientClaimValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimValues"></a>

```java
public java.util.List<java.lang.String> getClientClaimValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clockSkewSeconds`<sup>Required</sup> <a name="clockSkewSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clockSkewSeconds"></a>

```java
public java.lang.Number getClockSkewSeconds();
```

- *Type:* java.lang.Number

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `impersonationServiceUsers`<sup>Required</sup> <a name="impersonationServiceUsers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.impersonationServiceUsers"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList getImpersonationServiceUsers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.keytab"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList getKeytab();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthClients`<sup>Required</sup> <a name="oauthClients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.oauthClients"></a>

```java
public java.util.List<java.lang.String> getOauthClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `publicCertificate`<sup>Required</sup> <a name="publicCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicCertificate"></a>

```java
public java.lang.String getPublicCertificate();
```

- *Type:* java.lang.String

---

##### `publicKeyEndpoint`<sup>Required</sup> <a name="publicKeyEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicKeyEndpoint"></a>

```java
public java.lang.String getPublicKeyEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectClaimName`<sup>Required</sup> <a name="subjectClaimName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectClaimName"></a>

```java
public java.lang.String getSubjectClaimName();
```

- *Type:* java.lang.String

---

##### `subjectMappingAttribute`<sup>Required</sup> <a name="subjectMappingAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectMappingAttribute"></a>

```java
public java.lang.String getSubjectMappingAttribute();
```

- *Type:* java.lang.String

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectType"></a>

```java
public java.lang.String getSubjectType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.get"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_propagation_trusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference;

new DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags</a>

---



