# `opensearchOpensearchCluster` Submodule <a name="`opensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOpensearchCluster <a name="OpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  data_node_count: typing.Union[int, float],
  data_node_host_memory_gb: typing.Union[int, float],
  data_node_host_ocpu_count: typing.Union[int, float],
  data_node_host_type: str,
  data_node_storage_gb: typing.Union[int, float],
  display_name: str,
  master_node_count: typing.Union[int, float],
  master_node_host_memory_gb: typing.Union[int, float],
  master_node_host_ocpu_count: typing.Union[int, float],
  master_node_host_type: str,
  opendashboard_node_count: typing.Union[int, float],
  opendashboard_node_host_memory_gb: typing.Union[int, float],
  opendashboard_node_host_ocpu_count: typing.Union[int, float],
  software_version: str,
  subnet_compartment_id: str,
  subnet_id: str,
  vcn_compartment_id: str,
  vcn_id: str,
  data_node_host_bare_metal_shape: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  master_node_host_bare_metal_shape: str = None,
  security_master_user_name: str = None,
  security_master_user_password_hash: str = None,
  security_mode: str = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: OpensearchOpensearchClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeCount">data_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostMemoryGb">data_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostOcpuCount">data_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostType">data_node_host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeStorageGb">data_node_storage_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeCount">master_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostMemoryGb">master_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostOcpuCount">master_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostType">master_node_host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeCount">opendashboard_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostMemoryGb">opendashboard_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostOcpuCount">opendashboard_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.softwareVersion">software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetCompartmentId">subnet_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnCompartmentId">vcn_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostBareMetalShape">data_node_host_bare_metal_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostBareMetalShape">master_node_host_bare_metal_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserName">security_master_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserPasswordHash">security_master_user_password_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMode">security_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}.

---

##### `data_node_count`<sup>Required</sup> <a name="data_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}.

---

##### `data_node_host_memory_gb`<sup>Required</sup> <a name="data_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostMemoryGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}.

---

##### `data_node_host_ocpu_count`<sup>Required</sup> <a name="data_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostOcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}.

---

##### `data_node_host_type`<sup>Required</sup> <a name="data_node_host_type" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}.

---

##### `data_node_storage_gb`<sup>Required</sup> <a name="data_node_storage_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeStorageGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}.

---

##### `master_node_count`<sup>Required</sup> <a name="master_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}.

---

##### `master_node_host_memory_gb`<sup>Required</sup> <a name="master_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostMemoryGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}.

---

##### `master_node_host_ocpu_count`<sup>Required</sup> <a name="master_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostOcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}.

---

##### `master_node_host_type`<sup>Required</sup> <a name="master_node_host_type" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}.

---

##### `opendashboard_node_count`<sup>Required</sup> <a name="opendashboard_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}.

---

##### `opendashboard_node_host_memory_gb`<sup>Required</sup> <a name="opendashboard_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostMemoryGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}.

---

##### `opendashboard_node_host_ocpu_count`<sup>Required</sup> <a name="opendashboard_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.opendashboardNodeHostOcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}.

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.softwareVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}.

---

##### `subnet_compartment_id`<sup>Required</sup> <a name="subnet_compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}.

---

##### `vcn_compartment_id`<sup>Required</sup> <a name="vcn_compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}.

---

##### `data_node_host_bare_metal_shape`<sup>Optional</sup> <a name="data_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.dataNodeHostBareMetalShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master_node_host_bare_metal_shape`<sup>Optional</sup> <a name="master_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.masterNodeHostBareMetalShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}.

---

##### `security_master_user_name`<sup>Optional</sup> <a name="security_master_user_name" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}.

---

##### `security_master_user_password_hash`<sup>Optional</sup> <a name="security_master_user_password_hash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMasterUserPasswordHash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}.

---

##### `security_mode`<sup>Optional</sup> <a name="security_mode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.securityMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}.

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.systemTags"></a>

- *Type:* typing.Mapping[str]

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
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape">reset_data_node_host_bare_metal_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape">reset_master_node_host_bare_metal_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName">reset_security_master_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash">reset_security_master_user_password_hash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode">reset_security_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags">reset_system_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}.

---

##### `reset_data_node_host_bare_metal_shape` <a name="reset_data_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape"></a>

```python
def reset_data_node_host_bare_metal_shape() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master_node_host_bare_metal_shape` <a name="reset_master_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape"></a>

```python
def reset_master_node_host_bare_metal_shape() -> None
```

##### `reset_security_master_user_name` <a name="reset_security_master_user_name" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName"></a>

```python
def reset_security_master_user_name() -> None
```

##### `reset_security_master_user_password_hash` <a name="reset_security_master_user_password_hash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash"></a>

```python
def reset_security_master_user_password_hash() -> None
```

##### `reset_security_mode` <a name="reset_security_mode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode"></a>

```python
def reset_security_mode() -> None
```

##### `reset_system_tags` <a name="reset_system_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags"></a>

```python
def reset_system_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchCluster.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchOpensearchCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains">availability_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn">opendashboard_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp">opendashboard_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn">opensearch_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp">opensearch_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted">time_deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb">total_storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput">data_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput">data_node_host_bare_metal_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput">data_node_host_memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput">data_node_host_ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput">data_node_host_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput">data_node_storage_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput">master_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput">master_node_host_bare_metal_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput">master_node_host_memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput">master_node_host_ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput">master_node_host_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput">opendashboard_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput">opendashboard_node_host_memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput">opendashboard_node_host_ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput">security_master_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput">security_master_user_password_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput">security_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput">software_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput">subnet_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput">system_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput">vcn_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount">data_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">data_node_host_bare_metal_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb">data_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount">data_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType">data_node_host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb">data_node_storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount">master_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">master_node_host_bare_metal_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb">master_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount">master_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType">master_node_host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount">opendashboard_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">opendashboard_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">opendashboard_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName">security_master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash">security_master_user_password_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode">security_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion">software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId">subnet_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId">vcn_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domains`<sup>Required</sup> <a name="availability_domains" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains"></a>

```python
availability_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `opendashboard_fqdn`<sup>Required</sup> <a name="opendashboard_fqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```python
opendashboard_fqdn: str
```

- *Type:* str

---

##### `opendashboard_private_ip`<sup>Required</sup> <a name="opendashboard_private_ip" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```python
opendashboard_private_ip: str
```

- *Type:* str

---

##### `opensearch_fqdn`<sup>Required</sup> <a name="opensearch_fqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn"></a>

```python
opensearch_fqdn: str
```

- *Type:* str

---

##### `opensearch_private_ip`<sup>Required</sup> <a name="opensearch_private_ip" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```python
opensearch_private_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_deleted`<sup>Required</sup> <a name="time_deleted" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted"></a>

```python
time_deleted: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts"></a>

```python
timeouts: OpensearchOpensearchClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_storage_gb`<sup>Required</sup> <a name="total_storage_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb"></a>

```python
total_storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `data_node_count_input`<sup>Optional</sup> <a name="data_node_count_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput"></a>

```python
data_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_bare_metal_shape_input`<sup>Optional</sup> <a name="data_node_host_bare_metal_shape_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput"></a>

```python
data_node_host_bare_metal_shape_input: str
```

- *Type:* str

---

##### `data_node_host_memory_gb_input`<sup>Optional</sup> <a name="data_node_host_memory_gb_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput"></a>

```python
data_node_host_memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_ocpu_count_input`<sup>Optional</sup> <a name="data_node_host_ocpu_count_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput"></a>

```python
data_node_host_ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_type_input`<sup>Optional</sup> <a name="data_node_host_type_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput"></a>

```python
data_node_host_type_input: str
```

- *Type:* str

---

##### `data_node_storage_gb_input`<sup>Optional</sup> <a name="data_node_storage_gb_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput"></a>

```python
data_node_storage_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `master_node_count_input`<sup>Optional</sup> <a name="master_node_count_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput"></a>

```python
master_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_bare_metal_shape_input`<sup>Optional</sup> <a name="master_node_host_bare_metal_shape_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput"></a>

```python
master_node_host_bare_metal_shape_input: str
```

- *Type:* str

---

##### `master_node_host_memory_gb_input`<sup>Optional</sup> <a name="master_node_host_memory_gb_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput"></a>

```python
master_node_host_memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_ocpu_count_input`<sup>Optional</sup> <a name="master_node_host_ocpu_count_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput"></a>

```python
master_node_host_ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_type_input`<sup>Optional</sup> <a name="master_node_host_type_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput"></a>

```python
master_node_host_type_input: str
```

- *Type:* str

---

##### `opendashboard_node_count_input`<sup>Optional</sup> <a name="opendashboard_node_count_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput"></a>

```python
opendashboard_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_memory_gb_input`<sup>Optional</sup> <a name="opendashboard_node_host_memory_gb_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput"></a>

```python
opendashboard_node_host_memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_ocpu_count_input`<sup>Optional</sup> <a name="opendashboard_node_host_ocpu_count_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput"></a>

```python
opendashboard_node_host_ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_master_user_name_input`<sup>Optional</sup> <a name="security_master_user_name_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput"></a>

```python
security_master_user_name_input: str
```

- *Type:* str

---

##### `security_master_user_password_hash_input`<sup>Optional</sup> <a name="security_master_user_password_hash_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput"></a>

```python
security_master_user_password_hash_input: str
```

- *Type:* str

---

##### `security_mode_input`<sup>Optional</sup> <a name="security_mode_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput"></a>

```python
security_mode_input: str
```

- *Type:* str

---

##### `software_version_input`<sup>Optional</sup> <a name="software_version_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput"></a>

```python
software_version_input: str
```

- *Type:* str

---

##### `subnet_compartment_id_input`<sup>Optional</sup> <a name="subnet_compartment_id_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput"></a>

```python
subnet_compartment_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `system_tags_input`<sup>Optional</sup> <a name="system_tags_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput"></a>

```python
system_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OpensearchOpensearchClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>]

---

##### `vcn_compartment_id_input`<sup>Optional</sup> <a name="vcn_compartment_id_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput"></a>

```python
vcn_compartment_id_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `data_node_count`<sup>Required</sup> <a name="data_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount"></a>

```python
data_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_bare_metal_shape`<sup>Required</sup> <a name="data_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```python
data_node_host_bare_metal_shape: str
```

- *Type:* str

---

##### `data_node_host_memory_gb`<sup>Required</sup> <a name="data_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```python
data_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_ocpu_count`<sup>Required</sup> <a name="data_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```python
data_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_type`<sup>Required</sup> <a name="data_node_host_type" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType"></a>

```python
data_node_host_type: str
```

- *Type:* str

---

##### `data_node_storage_gb`<sup>Required</sup> <a name="data_node_storage_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```python
data_node_storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `master_node_count`<sup>Required</sup> <a name="master_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount"></a>

```python
master_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_bare_metal_shape`<sup>Required</sup> <a name="master_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```python
master_node_host_bare_metal_shape: str
```

- *Type:* str

---

##### `master_node_host_memory_gb`<sup>Required</sup> <a name="master_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```python
master_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_ocpu_count`<sup>Required</sup> <a name="master_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```python
master_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_type`<sup>Required</sup> <a name="master_node_host_type" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType"></a>

```python
master_node_host_type: str
```

- *Type:* str

---

##### `opendashboard_node_count`<sup>Required</sup> <a name="opendashboard_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```python
opendashboard_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_memory_gb`<sup>Required</sup> <a name="opendashboard_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```python
opendashboard_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_ocpu_count`<sup>Required</sup> <a name="opendashboard_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```python
opendashboard_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_master_user_name`<sup>Required</sup> <a name="security_master_user_name" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName"></a>

```python
security_master_user_name: str
```

- *Type:* str

---

##### `security_master_user_password_hash`<sup>Required</sup> <a name="security_master_user_password_hash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```python
security_master_user_password_hash: str
```

- *Type:* str

---

##### `security_mode`<sup>Required</sup> <a name="security_mode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode"></a>

```python
security_mode: str
```

- *Type:* str

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

---

##### `subnet_compartment_id`<sup>Required</sup> <a name="subnet_compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```python
subnet_compartment_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vcn_compartment_id`<sup>Required</sup> <a name="vcn_compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```python
vcn_compartment_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOpensearchClusterConfig <a name="OpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  data_node_count: typing.Union[int, float],
  data_node_host_memory_gb: typing.Union[int, float],
  data_node_host_ocpu_count: typing.Union[int, float],
  data_node_host_type: str,
  data_node_storage_gb: typing.Union[int, float],
  display_name: str,
  master_node_count: typing.Union[int, float],
  master_node_host_memory_gb: typing.Union[int, float],
  master_node_host_ocpu_count: typing.Union[int, float],
  master_node_host_type: str,
  opendashboard_node_count: typing.Union[int, float],
  opendashboard_node_host_memory_gb: typing.Union[int, float],
  opendashboard_node_host_ocpu_count: typing.Union[int, float],
  software_version: str,
  subnet_compartment_id: str,
  subnet_id: str,
  vcn_compartment_id: str,
  vcn_id: str,
  data_node_host_bare_metal_shape: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  master_node_host_bare_metal_shape: str = None,
  security_master_user_name: str = None,
  security_master_user_password_hash: str = None,
  security_mode: str = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: OpensearchOpensearchClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount">data_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb">data_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount">data_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType">data_node_host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb">data_node_storage_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount">master_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb">master_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount">master_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType">master_node_host_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount">opendashboard_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb">opendashboard_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount">opendashboard_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion">software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId">subnet_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId">vcn_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape">data_node_host_bare_metal_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape">master_node_host_bare_metal_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName">security_master_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash">security_master_user_password_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode">security_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}.

---

##### `data_node_count`<sup>Required</sup> <a name="data_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount"></a>

```python
data_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}.

---

##### `data_node_host_memory_gb`<sup>Required</sup> <a name="data_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb"></a>

```python
data_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}.

---

##### `data_node_host_ocpu_count`<sup>Required</sup> <a name="data_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount"></a>

```python
data_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}.

---

##### `data_node_host_type`<sup>Required</sup> <a name="data_node_host_type" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType"></a>

```python
data_node_host_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}.

---

##### `data_node_storage_gb`<sup>Required</sup> <a name="data_node_storage_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb"></a>

```python
data_node_storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}.

---

##### `master_node_count`<sup>Required</sup> <a name="master_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount"></a>

```python
master_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}.

---

##### `master_node_host_memory_gb`<sup>Required</sup> <a name="master_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb"></a>

```python
master_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}.

---

##### `master_node_host_ocpu_count`<sup>Required</sup> <a name="master_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount"></a>

```python
master_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}.

---

##### `master_node_host_type`<sup>Required</sup> <a name="master_node_host_type" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType"></a>

```python
master_node_host_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}.

---

##### `opendashboard_node_count`<sup>Required</sup> <a name="opendashboard_node_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount"></a>

```python
opendashboard_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}.

---

##### `opendashboard_node_host_memory_gb`<sup>Required</sup> <a name="opendashboard_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb"></a>

```python
opendashboard_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}.

---

##### `opendashboard_node_host_ocpu_count`<sup>Required</sup> <a name="opendashboard_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount"></a>

```python
opendashboard_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}.

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}.

---

##### `subnet_compartment_id`<sup>Required</sup> <a name="subnet_compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId"></a>

```python
subnet_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}.

---

##### `vcn_compartment_id`<sup>Required</sup> <a name="vcn_compartment_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId"></a>

```python
vcn_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}.

---

##### `data_node_host_bare_metal_shape`<sup>Optional</sup> <a name="data_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape"></a>

```python
data_node_host_bare_metal_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master_node_host_bare_metal_shape`<sup>Optional</sup> <a name="master_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape"></a>

```python
master_node_host_bare_metal_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}.

---

##### `security_master_user_name`<sup>Optional</sup> <a name="security_master_user_name" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName"></a>

```python
security_master_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}.

---

##### `security_master_user_password_hash`<sup>Optional</sup> <a name="security_master_user_password_hash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash"></a>

```python
security_master_user_password_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}.

---

##### `security_mode`<sup>Optional</sup> <a name="security_mode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode"></a>

```python
security_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}.

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts"></a>

```python
timeouts: OpensearchOpensearchClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}

---

### OpensearchOpensearchClusterTimeouts <a name="OpensearchOpensearchClusterTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOpensearchClusterTimeoutsOutputReference <a name="OpensearchOpensearchClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opensearch_opensearch_cluster

opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpensearchOpensearchClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>]

---



