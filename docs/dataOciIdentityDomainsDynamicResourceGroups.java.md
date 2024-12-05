# `dataOciIdentityDomainsDynamicResourceGroups` Submodule <a name="`dataOciIdentityDomainsDynamicResourceGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsDynamicResourceGroups <a name="DataOciIdentityDomainsDynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups oci_identity_domains_dynamic_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroups;

DataOciIdentityDomainsDynamicResourceGroups.Builder.create(Construct scope, java.lang.String id)
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
//  .dynamicResourceGroupCount(java.lang.Number)
//  .dynamicResourceGroupFilter(java.lang.String)
//  .id(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
//  .sortBy(java.lang.String)
//  .sortOrder(java.lang.String)
//  .startIndex(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupCount">dynamicResourceGroupCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupFilter">dynamicResourceGroupFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}.

---

##### `dynamicResourceGroupCount`<sup>Optional</sup> <a name="dynamicResourceGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}.

---

##### `dynamicResourceGroupFilter`<sup>Optional</sup> <a name="dynamicResourceGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.dynamicResourceGroupFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.sortOrder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.startIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupCount">resetDynamicResourceGroupCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupFilter">resetDynamicResourceGroupFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDynamicResourceGroupCount` <a name="resetDynamicResourceGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupCount"></a>

```java
public void resetDynamicResourceGroupCount()
```

##### `resetDynamicResourceGroupFilter` <a name="resetDynamicResourceGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupFilter"></a>

```java
public void resetDynamicResourceGroupFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetId"></a>

```java
public void resetId()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortBy"></a>

```java
public void resetSortBy()
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortOrder"></a>

```java
public void resetSortOrder()
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetStartIndex"></a>

```java
public void resetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroups;

DataOciIdentityDomainsDynamicResourceGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroups;

DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroups;

DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroups;

DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsDynamicResourceGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsDynamicResourceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsDynamicResourceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroups">dynamicResourceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCountInput">dynamicResourceGroupCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilterInput">dynamicResourceGroupFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortByInput">sortByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndexInput">startIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCount">dynamicResourceGroupCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilter">dynamicResourceGroupFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dynamicResourceGroups`<sup>Required</sup> <a name="dynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroups"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList getDynamicResourceGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dynamicResourceGroupCountInput`<sup>Optional</sup> <a name="dynamicResourceGroupCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCountInput"></a>

```java
public java.lang.Number getDynamicResourceGroupCountInput();
```

- *Type:* java.lang.Number

---

##### `dynamicResourceGroupFilterInput`<sup>Optional</sup> <a name="dynamicResourceGroupFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilterInput"></a>

```java
public java.lang.String getDynamicResourceGroupFilterInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortByInput"></a>

```java
public java.lang.String getSortByInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndexInput"></a>

```java
public java.lang.Number getStartIndexInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dynamicResourceGroupCount`<sup>Required</sup> <a name="dynamicResourceGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCount"></a>

```java
public java.lang.Number getDynamicResourceGroupCount();
```

- *Type:* java.lang.Number

---

##### `dynamicResourceGroupFilter`<sup>Required</sup> <a name="dynamicResourceGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilter"></a>

```java
public java.lang.String getDynamicResourceGroupFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsDynamicResourceGroupsConfig <a name="DataOciIdentityDomainsDynamicResourceGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsConfig;

DataOciIdentityDomainsDynamicResourceGroupsConfig.builder()
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
//  .dynamicResourceGroupCount(java.lang.Number)
//  .dynamicResourceGroupFilter(java.lang.String)
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupCount">dynamicResourceGroupCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupFilter">dynamicResourceGroupFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortBy">sortBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}.

---

##### `dynamicResourceGroupCount`<sup>Optional</sup> <a name="dynamicResourceGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupCount"></a>

```java
public java.lang.Number getDynamicResourceGroupCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}.

---

##### `dynamicResourceGroupFilter`<sup>Optional</sup> <a name="dynamicResourceGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupFilter"></a>

```java
public java.lang.String getDynamicResourceGroupFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortBy"></a>

```java
public java.lang.String getSortBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}.

---

### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.builder()
    .build();
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags;

DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.adminRole">adminRole</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appName">appName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.legacyGroupName">legacyGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.adminRole"></a>

```java
public IResolvable getAdminRole();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appName"></a>

```java
public java.lang.String getAppName();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `legacyGroupName`<sup>Required</sup> <a name="legacyGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.legacyGroupName"></a>

```java
public java.lang.String getLegacyGroupName();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.grantMechanism">grantMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `grantMechanism`<sup>Required</sup> <a name="grantMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.grantMechanism"></a>

```java
public java.lang.String getGrantMechanism();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.dynamicGroupAppRoles">dynamicGroupAppRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.matchingRule">matchingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags">urnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `dynamicGroupAppRoles`<sup>Required</sup> <a name="dynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.dynamicGroupAppRoles"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList getDynamicGroupAppRoles();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.grants"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList getGrants();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchingRule`<sup>Required</sup> <a name="matchingRule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.matchingRule"></a>

```java
public java.lang.String getMatchingRule();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `urnietfparamsscimschemasoracleidcsextensionOciTags`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList getUrnietfparamsscimschemasoracleidcsextensionOciTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_dynamic_resource_groups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference;

new DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags">definedTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags">freeformTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug">tagSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList getDefinedTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList getFreeformTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a>

---

##### `tagSlug`<sup>Required</sup> <a name="tagSlug" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug"></a>

```java
public java.lang.String getTagSlug();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---



