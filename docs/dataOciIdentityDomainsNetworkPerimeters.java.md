# `dataOciIdentityDomainsNetworkPerimeters` Submodule <a name="`dataOciIdentityDomainsNetworkPerimeters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsNetworkPerimeters <a name="DataOciIdentityDomainsNetworkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters oci_identity_domains_network_perimeters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimeters;

DataOciIdentityDomainsNetworkPerimeters.Builder.create(Construct scope, java.lang.String id)
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
//  .networkPerimeterCount(java.lang.Number)
//  .networkPerimeterFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterCount">networkPerimeterCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterFilter">networkPerimeterFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPerimeterCount`<sup>Optional</sup> <a name="networkPerimeterCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}.

---

##### `networkPerimeterFilter`<sup>Optional</sup> <a name="networkPerimeterFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.networkPerimeterFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterCount">resetNetworkPerimeterCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterFilter">resetNetworkPerimeterFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkPerimeterCount` <a name="resetNetworkPerimeterCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterCount"></a>

```java
public void resetNetworkPerimeterCount()
```

##### `resetNetworkPerimeterFilter` <a name="resetNetworkPerimeterFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterFilter"></a>

```java
public void resetNetworkPerimeterFilter()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsNetworkPerimeters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimeters;

DataOciIdentityDomainsNetworkPerimeters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimeters;

DataOciIdentityDomainsNetworkPerimeters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimeters;

DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimeters;

DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsNetworkPerimeters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsNetworkPerimeters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsNetworkPerimeters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsNetworkPerimeters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeters">networkPerimeters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCountInput">networkPerimeterCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilterInput">networkPerimeterFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCount">networkPerimeterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilter">networkPerimeterFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `networkPerimeters`<sup>Required</sup> <a name="networkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeters"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList getNetworkPerimeters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkPerimeterCountInput`<sup>Optional</sup> <a name="networkPerimeterCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCountInput"></a>

```java
public java.lang.Number getNetworkPerimeterCountInput();
```

- *Type:* java.lang.Number

---

##### `networkPerimeterFilterInput`<sup>Optional</sup> <a name="networkPerimeterFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilterInput"></a>

```java
public java.lang.String getNetworkPerimeterFilterInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `networkPerimeterCount`<sup>Required</sup> <a name="networkPerimeterCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCount"></a>

```java
public java.lang.Number getNetworkPerimeterCount();
```

- *Type:* java.lang.Number

---

##### `networkPerimeterFilter`<sup>Required</sup> <a name="networkPerimeterFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilter"></a>

```java
public java.lang.String getNetworkPerimeterFilter();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsNetworkPerimetersConfig <a name="DataOciIdentityDomainsNetworkPerimetersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersConfig;

DataOciIdentityDomainsNetworkPerimetersConfig.builder()
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
//  .networkPerimeterCount(java.lang.Number)
//  .networkPerimeterFilter(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterCount">networkPerimeterCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterFilter">networkPerimeterFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPerimeterCount`<sup>Optional</sup> <a name="networkPerimeterCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterCount"></a>

```java
public java.lang.Number getNetworkPerimeterCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}.

---

##### `networkPerimeterFilter`<sup>Optional</sup> <a name="networkPerimeterFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterFilter"></a>

```java
public java.lang.String getNetworkPerimeterFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}.

---

### DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters;

DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters.builder()
    .build();
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy;

DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy;

DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses;

DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses.builder()
    .build();
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta;

DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta.builder()
    .build();
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags;

DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ipAddresses">ipAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters">DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ipAddresses"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList getIpAddresses();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters">DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_network_perimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference;

new DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags</a>

---



