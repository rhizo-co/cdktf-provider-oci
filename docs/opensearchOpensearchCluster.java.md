# `opensearchOpensearchCluster` Submodule <a name="`opensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOpensearchCluster <a name="OpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchCluster;

OpensearchOpensearchCluster.Builder.create(Construct scope, java.lang.String id)
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
    .dataNodeCount(java.lang.Number)
    .dataNodeHostMemoryGb(java.lang.Number)
    .dataNodeHostOcpuCount(java.lang.Number)
    .dataNodeHostType(java.lang.String)
    .dataNodeStorageGb(java.lang.Number)
    .displayName(java.lang.String)
    .masterNodeCount(java.lang.Number)
    .masterNodeHostMemoryGb(java.lang.Number)
    .masterNodeHostOcpuCount(java.lang.Number)
    .masterNodeHostType(java.lang.String)
    .opendashboardNodeCount(java.lang.Number)
    .opendashboardNodeHostMemoryGb(java.lang.Number)
    .opendashboardNodeHostOcpuCount(java.lang.Number)
    .softwareVersion(java.lang.String)
    .subnetCompartmentId(java.lang.String)
    .subnetId(java.lang.String)
    .vcnCompartmentId(java.lang.String)
    .vcnId(java.lang.String)
//  .dataNodeHostBareMetalShape(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .masterNodeHostBareMetalShape(java.lang.String)
//  .securityMasterUserName(java.lang.String)
//  .securityMasterUserPasswordHash(java.lang.String)
//  .securityMode(java.lang.String)
//  .systemTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchOpensearchClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeCount">dataNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostType">dataNodeHostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeCount">masterNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostType">masterNodeHostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.softwareVersion">softwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetCompartmentId">subnetCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnCompartmentId">vcnCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserName">securityMasterUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMode">securityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}.

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}.

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostMemoryGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}.

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostOcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}.

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}.

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeStorageGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}.

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}.

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostMemoryGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}.

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostOcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}.

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}.

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}.

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostMemoryGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}.

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostOcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}.

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.softwareVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}.

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetCompartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}.

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnCompartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}.

---

##### `dataNodeHostBareMetalShape`<sup>Optional</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostBareMetalShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masterNodeHostBareMetalShape`<sup>Optional</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostBareMetalShape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}.

---

##### `securityMasterUserName`<sup>Optional</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}.

---

##### `securityMasterUserPasswordHash`<sup>Optional</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserPasswordHash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}.

---

##### `securityMode`<sup>Optional</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}.

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.systemTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape">resetDataNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape">resetMasterNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName">resetSecurityMasterUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash">resetSecurityMasterUserPasswordHash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode">resetSecurityMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags">resetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts"></a>

```java
public void putTimeouts(OpensearchOpensearchClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---

##### `resetDataNodeHostBareMetalShape` <a name="resetDataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape"></a>

```java
public void resetDataNodeHostBareMetalShape()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMasterNodeHostBareMetalShape` <a name="resetMasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape"></a>

```java
public void resetMasterNodeHostBareMetalShape()
```

##### `resetSecurityMasterUserName` <a name="resetSecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName"></a>

```java
public void resetSecurityMasterUserName()
```

##### `resetSecurityMasterUserPasswordHash` <a name="resetSecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash"></a>

```java
public void resetSecurityMasterUserPasswordHash()
```

##### `resetSecurityMode` <a name="resetSecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode"></a>

```java
public void resetSecurityMode()
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags"></a>

```java
public void resetSystemTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchCluster;

OpensearchOpensearchCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchCluster;

OpensearchOpensearchCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchCluster;

OpensearchOpensearchCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchCluster;

OpensearchOpensearchCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchOpensearchCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchOpensearchCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains">availabilityDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn">opendashboardFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp">opendashboardPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn">opensearchFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp">opensearchPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted">timeDeleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb">totalStorageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput">dataNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput">dataNodeHostBareMetalShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput">dataNodeHostMemoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput">dataNodeHostOcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput">dataNodeHostTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput">dataNodeStorageGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput">masterNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput">masterNodeHostBareMetalShapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput">masterNodeHostMemoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput">masterNodeHostOcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput">masterNodeHostTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput">opendashboardNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput">opendashboardNodeHostMemoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput">opendashboardNodeHostOcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput">securityMasterUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput">securityMasterUserPasswordHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput">securityModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput">softwareVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput">subnetCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput">systemTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput">vcnCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount">dataNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType">dataNodeHostType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount">masterNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType">masterNodeHostType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName">securityMasterUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode">securityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion">softwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId">subnetCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId">vcnCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomains`<sup>Required</sup> <a name="availabilityDomains" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains"></a>

```java
public java.util.List<java.lang.String> getAvailabilityDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `opendashboardFqdn`<sup>Required</sup> <a name="opendashboardFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```java
public java.lang.String getOpendashboardFqdn();
```

- *Type:* java.lang.String

---

##### `opendashboardPrivateIp`<sup>Required</sup> <a name="opendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```java
public java.lang.String getOpendashboardPrivateIp();
```

- *Type:* java.lang.String

---

##### `opensearchFqdn`<sup>Required</sup> <a name="opensearchFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn"></a>

```java
public java.lang.String getOpensearchFqdn();
```

- *Type:* java.lang.String

---

##### `opensearchPrivateIp`<sup>Required</sup> <a name="opensearchPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```java
public java.lang.String getOpensearchPrivateIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted"></a>

```java
public java.lang.String getTimeDeleted();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts"></a>

```java
public OpensearchOpensearchClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalStorageGb`<sup>Required</sup> <a name="totalStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb"></a>

```java
public java.lang.Number getTotalStorageGb();
```

- *Type:* java.lang.Number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dataNodeCountInput`<sup>Optional</sup> <a name="dataNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput"></a>

```java
public java.lang.Number getDataNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="dataNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput"></a>

```java
public java.lang.String getDataNodeHostBareMetalShapeInput();
```

- *Type:* java.lang.String

---

##### `dataNodeHostMemoryGbInput`<sup>Optional</sup> <a name="dataNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput"></a>

```java
public java.lang.Number getDataNodeHostMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostOcpuCountInput`<sup>Optional</sup> <a name="dataNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput"></a>

```java
public java.lang.Number getDataNodeHostOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostTypeInput`<sup>Optional</sup> <a name="dataNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput"></a>

```java
public java.lang.String getDataNodeHostTypeInput();
```

- *Type:* java.lang.String

---

##### `dataNodeStorageGbInput`<sup>Optional</sup> <a name="dataNodeStorageGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput"></a>

```java
public java.lang.Number getDataNodeStorageGbInput();
```

- *Type:* java.lang.Number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `masterNodeCountInput`<sup>Optional</sup> <a name="masterNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput"></a>

```java
public java.lang.Number getMasterNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="masterNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput"></a>

```java
public java.lang.String getMasterNodeHostBareMetalShapeInput();
```

- *Type:* java.lang.String

---

##### `masterNodeHostMemoryGbInput`<sup>Optional</sup> <a name="masterNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput"></a>

```java
public java.lang.Number getMasterNodeHostMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostOcpuCountInput`<sup>Optional</sup> <a name="masterNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput"></a>

```java
public java.lang.Number getMasterNodeHostOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostTypeInput`<sup>Optional</sup> <a name="masterNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput"></a>

```java
public java.lang.String getMasterNodeHostTypeInput();
```

- *Type:* java.lang.String

---

##### `opendashboardNodeCountInput`<sup>Optional</sup> <a name="opendashboardNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput"></a>

```java
public java.lang.Number getOpendashboardNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `opendashboardNodeHostMemoryGbInput`<sup>Optional</sup> <a name="opendashboardNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput"></a>

```java
public java.lang.Number getOpendashboardNodeHostMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `opendashboardNodeHostOcpuCountInput`<sup>Optional</sup> <a name="opendashboardNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput"></a>

```java
public java.lang.Number getOpendashboardNodeHostOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `securityMasterUserNameInput`<sup>Optional</sup> <a name="securityMasterUserNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput"></a>

```java
public java.lang.String getSecurityMasterUserNameInput();
```

- *Type:* java.lang.String

---

##### `securityMasterUserPasswordHashInput`<sup>Optional</sup> <a name="securityMasterUserPasswordHashInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput"></a>

```java
public java.lang.String getSecurityMasterUserPasswordHashInput();
```

- *Type:* java.lang.String

---

##### `securityModeInput`<sup>Optional</sup> <a name="securityModeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput"></a>

```java
public java.lang.String getSecurityModeInput();
```

- *Type:* java.lang.String

---

##### `softwareVersionInput`<sup>Optional</sup> <a name="softwareVersionInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput"></a>

```java
public java.lang.String getSoftwareVersionInput();
```

- *Type:* java.lang.String

---

##### `subnetCompartmentIdInput`<sup>Optional</sup> <a name="subnetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput"></a>

```java
public java.lang.String getSubnetCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---

##### `vcnCompartmentIdInput`<sup>Optional</sup> <a name="vcnCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput"></a>

```java
public java.lang.String getVcnCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount"></a>

```java
public java.lang.Number getDataNodeCount();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostBareMetalShape`<sup>Required</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```java
public java.lang.String getDataNodeHostBareMetalShape();
```

- *Type:* java.lang.String

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```java
public java.lang.Number getDataNodeHostMemoryGb();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```java
public java.lang.Number getDataNodeHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType"></a>

```java
public java.lang.String getDataNodeHostType();
```

- *Type:* java.lang.String

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```java
public java.lang.Number getDataNodeStorageGb();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount"></a>

```java
public java.lang.Number getMasterNodeCount();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostBareMetalShape`<sup>Required</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```java
public java.lang.String getMasterNodeHostBareMetalShape();
```

- *Type:* java.lang.String

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```java
public java.lang.Number getMasterNodeHostMemoryGb();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```java
public java.lang.Number getMasterNodeHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType"></a>

```java
public java.lang.String getMasterNodeHostType();
```

- *Type:* java.lang.String

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```java
public java.lang.Number getOpendashboardNodeCount();
```

- *Type:* java.lang.Number

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```java
public java.lang.Number getOpendashboardNodeHostMemoryGb();
```

- *Type:* java.lang.Number

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```java
public java.lang.Number getOpendashboardNodeHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `securityMasterUserName`<sup>Required</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName"></a>

```java
public java.lang.String getSecurityMasterUserName();
```

- *Type:* java.lang.String

---

##### `securityMasterUserPasswordHash`<sup>Required</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```java
public java.lang.String getSecurityMasterUserPasswordHash();
```

- *Type:* java.lang.String

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode"></a>

```java
public java.lang.String getSecurityMode();
```

- *Type:* java.lang.String

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion"></a>

```java
public java.lang.String getSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```java
public java.lang.String getSubnetCompartmentId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```java
public java.lang.String getVcnCompartmentId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOpensearchClusterConfig <a name="OpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchClusterConfig;

OpensearchOpensearchClusterConfig.builder()
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
    .dataNodeCount(java.lang.Number)
    .dataNodeHostMemoryGb(java.lang.Number)
    .dataNodeHostOcpuCount(java.lang.Number)
    .dataNodeHostType(java.lang.String)
    .dataNodeStorageGb(java.lang.Number)
    .displayName(java.lang.String)
    .masterNodeCount(java.lang.Number)
    .masterNodeHostMemoryGb(java.lang.Number)
    .masterNodeHostOcpuCount(java.lang.Number)
    .masterNodeHostType(java.lang.String)
    .opendashboardNodeCount(java.lang.Number)
    .opendashboardNodeHostMemoryGb(java.lang.Number)
    .opendashboardNodeHostOcpuCount(java.lang.Number)
    .softwareVersion(java.lang.String)
    .subnetCompartmentId(java.lang.String)
    .subnetId(java.lang.String)
    .vcnCompartmentId(java.lang.String)
    .vcnId(java.lang.String)
//  .dataNodeHostBareMetalShape(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .masterNodeHostBareMetalShape(java.lang.String)
//  .securityMasterUserName(java.lang.String)
//  .securityMasterUserPasswordHash(java.lang.String)
//  .securityMode(java.lang.String)
//  .systemTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OpensearchOpensearchClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount">dataNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType">dataNodeHostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount">masterNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType">masterNodeHostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion">softwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId">subnetCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId">vcnCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName">securityMasterUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode">securityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}.

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount"></a>

```java
public java.lang.Number getDataNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}.

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb"></a>

```java
public java.lang.Number getDataNodeHostMemoryGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}.

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount"></a>

```java
public java.lang.Number getDataNodeHostOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}.

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType"></a>

```java
public java.lang.String getDataNodeHostType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}.

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb"></a>

```java
public java.lang.Number getDataNodeStorageGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}.

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount"></a>

```java
public java.lang.Number getMasterNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}.

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb"></a>

```java
public java.lang.Number getMasterNodeHostMemoryGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}.

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount"></a>

```java
public java.lang.Number getMasterNodeHostOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}.

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType"></a>

```java
public java.lang.String getMasterNodeHostType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}.

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount"></a>

```java
public java.lang.Number getOpendashboardNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}.

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb"></a>

```java
public java.lang.Number getOpendashboardNodeHostMemoryGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}.

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount"></a>

```java
public java.lang.Number getOpendashboardNodeHostOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}.

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion"></a>

```java
public java.lang.String getSoftwareVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}.

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId"></a>

```java
public java.lang.String getSubnetCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}.

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId"></a>

```java
public java.lang.String getVcnCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}.

---

##### `dataNodeHostBareMetalShape`<sup>Optional</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape"></a>

```java
public java.lang.String getDataNodeHostBareMetalShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masterNodeHostBareMetalShape`<sup>Optional</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape"></a>

```java
public java.lang.String getMasterNodeHostBareMetalShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}.

---

##### `securityMasterUserName`<sup>Optional</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName"></a>

```java
public java.lang.String getSecurityMasterUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}.

---

##### `securityMasterUserPasswordHash`<sup>Optional</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash"></a>

```java
public java.lang.String getSecurityMasterUserPasswordHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}.

---

##### `securityMode`<sup>Optional</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode"></a>

```java
public java.lang.String getSecurityMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}.

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts"></a>

```java
public OpensearchOpensearchClusterTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}

---

### OpensearchOpensearchClusterTimeouts <a name="OpensearchOpensearchClusterTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchClusterTimeouts;

OpensearchOpensearchClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOpensearchClusterTimeoutsOutputReference <a name="OpensearchOpensearchClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opensearch_opensearch_cluster.OpensearchOpensearchClusterTimeoutsOutputReference;

new OpensearchOpensearchClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---



