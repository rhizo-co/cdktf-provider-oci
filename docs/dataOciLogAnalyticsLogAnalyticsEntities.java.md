# `dataOciLogAnalyticsLogAnalyticsEntities` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntities <a name="DataOciLogAnalyticsLogAnalyticsEntities" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities oci_log_analytics_log_analytics_entities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntities;

DataOciLogAnalyticsLogAnalyticsEntities.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .namespace(java.lang.String)
//  .cloudResourceId(java.lang.String)
//  .entityTypeName(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciLogAnalyticsLogAnalyticsEntitiesFilter>)
//  .hostname(java.lang.String)
//  .hostnameContains(java.lang.String)
//  .id(java.lang.String)
//  .isManagementAgentIdNull(java.lang.String)
//  .lifecycleDetailsContains(java.lang.String)
//  .metadataEquals(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .nameContains(java.lang.String)
//  .sourceId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.cloudResourceId">cloudResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.entityTypeName">entityTypeName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.isManagementAgentIdNull">isManagementAgentIdNull</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycleDetailsContains">lifecycleDetailsContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.metadataEquals">metadataEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.nameContains">nameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}.

---

##### `cloudResourceId`<sup>Optional</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.cloudResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}.

---

##### `entityTypeName`<sup>Optional</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.entityTypeName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#filter DataOciLogAnalyticsLogAnalyticsEntities#filter}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}.

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostnameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagementAgentIdNull`<sup>Optional</sup> <a name="isManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.isManagementAgentIdNull"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}.

---

##### `lifecycleDetailsContains`<sup>Optional</sup> <a name="lifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycleDetailsContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}.

---

##### `metadataEquals`<sup>Optional</sup> <a name="metadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.metadataEquals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `nameContains`<sup>Optional</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.nameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.sourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId">resetCloudResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName">resetEntityTypeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains">resetHostnameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull">resetIsManagementAgentIdNull</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains">resetLifecycleDetailsContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals">resetMetadataEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains">resetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciLogAnalyticsLogAnalyticsEntitiesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>>

---

##### `resetCloudResourceId` <a name="resetCloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId"></a>

```java
public void resetCloudResourceId()
```

##### `resetEntityTypeName` <a name="resetEntityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName"></a>

```java
public void resetEntityTypeName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetHostnameContains` <a name="resetHostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains"></a>

```java
public void resetHostnameContains()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId"></a>

```java
public void resetId()
```

##### `resetIsManagementAgentIdNull` <a name="resetIsManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull"></a>

```java
public void resetIsManagementAgentIdNull()
```

##### `resetLifecycleDetailsContains` <a name="resetLifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains"></a>

```java
public void resetLifecycleDetailsContains()
```

##### `resetMetadataEquals` <a name="resetMetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals"></a>

```java
public void resetMetadataEquals()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName"></a>

```java
public void resetName()
```

##### `resetNameContains` <a name="resetNameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains"></a>

```java
public void resetNameContains()
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId"></a>

```java
public void resetSourceId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntities;

DataOciLogAnalyticsLogAnalyticsEntities.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntities;

DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntities;

DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntities;

DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciLogAnalyticsLogAnalyticsEntities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection">logAnalyticsEntityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput">cloudResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput">entityTypeNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput">hostnameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput">isManagementAgentIdNullInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput">lifecycleDetailsContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput">metadataEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput">nameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId">cloudResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName">entityTypeName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull">isManagementAgentIdNull</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains">lifecycleDetailsContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals">metadataEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains">nameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a>

---

##### `logAnalyticsEntityCollection`<sup>Required</sup> <a name="logAnalyticsEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList getLogAnalyticsEntityCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a>

---

##### `cloudResourceIdInput`<sup>Optional</sup> <a name="cloudResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput"></a>

```java
public java.lang.String getCloudResourceIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `entityTypeNameInput`<sup>Optional</sup> <a name="entityTypeNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput"></a>

```java
public java.util.List<java.lang.String> getEntityTypeNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>>

---

##### `hostnameContainsInput`<sup>Optional</sup> <a name="hostnameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput"></a>

```java
public java.lang.String getHostnameContainsInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isManagementAgentIdNullInput`<sup>Optional</sup> <a name="isManagementAgentIdNullInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput"></a>

```java
public java.lang.String getIsManagementAgentIdNullInput();
```

- *Type:* java.lang.String

---

##### `lifecycleDetailsContainsInput`<sup>Optional</sup> <a name="lifecycleDetailsContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput"></a>

```java
public java.lang.String getLifecycleDetailsContainsInput();
```

- *Type:* java.lang.String

---

##### `metadataEqualsInput`<sup>Optional</sup> <a name="metadataEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput"></a>

```java
public java.util.List<java.lang.String> getMetadataEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameContainsInput`<sup>Optional</sup> <a name="nameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput"></a>

```java
public java.lang.String getNameContainsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput"></a>

```java
public java.lang.String getSourceIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId"></a>

```java
public java.lang.String getCloudResourceId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName"></a>

```java
public java.util.List<java.lang.String> getEntityTypeName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `hostnameContains`<sup>Required</sup> <a name="hostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains"></a>

```java
public java.lang.String getHostnameContains();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isManagementAgentIdNull`<sup>Required</sup> <a name="isManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull"></a>

```java
public java.lang.String getIsManagementAgentIdNull();
```

- *Type:* java.lang.String

---

##### `lifecycleDetailsContains`<sup>Required</sup> <a name="lifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains"></a>

```java
public java.lang.String getLifecycleDetailsContains();
```

- *Type:* java.lang.String

---

##### `metadataEquals`<sup>Required</sup> <a name="metadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals"></a>

```java
public java.util.List<java.lang.String> getMetadataEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameContains`<sup>Required</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains"></a>

```java
public java.lang.String getNameContains();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesConfig <a name="DataOciLogAnalyticsLogAnalyticsEntitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig;

DataOciLogAnalyticsLogAnalyticsEntitiesConfig.builder()
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
    .compartmentId(java.lang.String)
    .namespace(java.lang.String)
//  .cloudResourceId(java.lang.String)
//  .entityTypeName(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciLogAnalyticsLogAnalyticsEntitiesFilter>)
//  .hostname(java.lang.String)
//  .hostnameContains(java.lang.String)
//  .id(java.lang.String)
//  .isManagementAgentIdNull(java.lang.String)
//  .lifecycleDetailsContains(java.lang.String)
//  .metadataEquals(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .nameContains(java.lang.String)
//  .sourceId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId">cloudResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName">entityTypeName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains">hostnameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull">isManagementAgentIdNull</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains">lifecycleDetailsContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals">metadataEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains">nameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}.

---

##### `cloudResourceId`<sup>Optional</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId"></a>

```java
public java.lang.String getCloudResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}.

---

##### `entityTypeName`<sup>Optional</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName"></a>

```java
public java.util.List<java.lang.String> getEntityTypeName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#filter DataOciLogAnalyticsLogAnalyticsEntities#filter}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}.

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains"></a>

```java
public java.lang.String getHostnameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagementAgentIdNull`<sup>Optional</sup> <a name="isManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull"></a>

```java
public java.lang.String getIsManagementAgentIdNull();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}.

---

##### `lifecycleDetailsContains`<sup>Optional</sup> <a name="lifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains"></a>

```java
public java.lang.String getLifecycleDetailsContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}.

---

##### `metadataEquals`<sup>Optional</sup> <a name="metadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals"></a>

```java
public java.util.List<java.lang.String> getMetadataEquals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `nameContains`<sup>Optional</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains"></a>

```java
public java.lang.String getNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesFilter <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter;

DataOciLogAnalyticsLogAnalyticsEntitiesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection;

DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection.builder()
    .build();
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems;

DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems.builder()
    .build();
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata;

DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata.builder()
    .build();
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems;

DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesFilterList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList;

new DataOciLogAnalyticsLogAnalyticsEntitiesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference;

new DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected">areLogsCollected</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId">cloudResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName">entityTypeInternalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName">entityTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId">managementAgentCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName">managementAgentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered">timeLastDiscovered</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion">timezoneRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areLogsCollected`<sup>Required</sup> <a name="areLogsCollected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected"></a>

```java
public IResolvable getAreLogsCollected();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId"></a>

```java
public java.lang.String getCloudResourceId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `entityTypeInternalName`<sup>Required</sup> <a name="entityTypeInternalName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName"></a>

```java
public java.lang.String getEntityTypeInternalName();
```

- *Type:* java.lang.String

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName"></a>

```java
public java.lang.String getEntityTypeName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managementAgentCompartmentId`<sup>Required</sup> <a name="managementAgentCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId"></a>

```java
public java.lang.String getManagementAgentCompartmentId();
```

- *Type:* java.lang.String

---

##### `managementAgentDisplayName`<sup>Required</sup> <a name="managementAgentDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName"></a>

```java
public java.lang.String getManagementAgentDisplayName();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties"></a>

```java
public StringMap getProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastDiscovered`<sup>Required</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered"></a>

```java
public java.lang.String getTimeLastDiscovered();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `timezoneRegion`<sup>Required</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion"></a>

```java
public java.lang.String getTimezoneRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_log_analytics_log_analytics_entities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference;

new DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue"></a>

```java
public DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a>

---



