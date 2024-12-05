# `bdsBdsInstance` Submodule <a name="`bdsBdsInstance` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstance <a name="BdsBdsInstance" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance oci_bds_bds_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_admin_password: str,
  cluster_public_key: str,
  cluster_version: str,
  compartment_id: str,
  display_name: str,
  is_high_availability: typing.Union[bool, IResolvable],
  is_secure: typing.Union[bool, IResolvable],
  master_node: BdsBdsInstanceMasterNode,
  util_node: BdsBdsInstanceUtilNode,
  worker_node: BdsBdsInstanceWorkerNode,
  bootstrap_script_url: str = None,
  cloud_sql_details: typing.Union[IResolvable, typing.List[BdsBdsInstanceCloudSqlDetails]] = None,
  cluster_profile: str = None,
  compute_only_worker_node: BdsBdsInstanceComputeOnlyWorkerNode = None,
  defined_tags: typing.Mapping[str] = None,
  edge_node: BdsBdsInstanceEdgeNode = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ignore_existing_nodes_shape: typing.List[str] = None,
  is_cloud_sql_configured: typing.Union[bool, IResolvable] = None,
  is_force_stop_jobs: typing.Union[bool, IResolvable] = None,
  is_kafka_configured: typing.Union[bool, IResolvable] = None,
  kafka_broker_node: BdsBdsInstanceKafkaBrokerNode = None,
  kerberos_realm_name: str = None,
  kms_key_id: str = None,
  network_config: BdsBdsInstanceNetworkConfig = None,
  os_patch_version: str = None,
  state: str = None,
  timeouts: BdsBdsInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_admin_password BdsBdsInstance#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_public_key BdsBdsInstance#cluster_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_version BdsBdsInstance#cluster_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compartment_id BdsBdsInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#display_name BdsBdsInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isHighAvailability">is_high_availability</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_high_availability BdsBdsInstance#is_high_availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isSecure">is_secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_secure BdsBdsInstance#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.masterNode">master_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a></code> | master_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.utilNode">util_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a></code> | util_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.workerNode">worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a></code> | worker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.bootstrapScriptUrl">bootstrap_script_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#bootstrap_script_url BdsBdsInstance#bootstrap_script_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.cloudSqlDetails">cloud_sql_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]</code> | cloud_sql_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterProfile">cluster_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_profile BdsBdsInstance#cluster_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.computeOnlyWorkerNode">compute_only_worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a></code> | compute_only_worker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#defined_tags BdsBdsInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.edgeNode">edge_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a></code> | edge_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#freeform_tags BdsBdsInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#id BdsBdsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.ignoreExistingNodesShape">ignore_existing_nodes_shape</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ignore_existing_nodes_shape BdsBdsInstance#ignore_existing_nodes_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isCloudSqlConfigured">is_cloud_sql_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_cloud_sql_configured BdsBdsInstance#is_cloud_sql_configured}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isForceStopJobs">is_force_stop_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_force_stop_jobs BdsBdsInstance#is_force_stop_jobs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isKafkaConfigured">is_kafka_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_kafka_configured BdsBdsInstance#is_kafka_configured}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.kafkaBrokerNode">kafka_broker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a></code> | kafka_broker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.kerberosRealmName">kerberos_realm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kerberos_realm_name BdsBdsInstance#kerberos_realm_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kms_key_id BdsBdsInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.osPatchVersion">os_patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#os_patch_version BdsBdsInstance#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#state BdsBdsInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_admin_password BdsBdsInstance#cluster_admin_password}.

---

##### `cluster_public_key`<sup>Required</sup> <a name="cluster_public_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_public_key BdsBdsInstance#cluster_public_key}.

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_version BdsBdsInstance#cluster_version}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compartment_id BdsBdsInstance#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#display_name BdsBdsInstance#display_name}.

---

##### `is_high_availability`<sup>Required</sup> <a name="is_high_availability" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isHighAvailability"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_high_availability BdsBdsInstance#is_high_availability}.

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isSecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_secure BdsBdsInstance#is_secure}.

---

##### `master_node`<sup>Required</sup> <a name="master_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.masterNode"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

master_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#master_node BdsBdsInstance#master_node}

---

##### `util_node`<sup>Required</sup> <a name="util_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.utilNode"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

util_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#util_node BdsBdsInstance#util_node}

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.workerNode"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#worker_node BdsBdsInstance#worker_node}

---

##### `bootstrap_script_url`<sup>Optional</sup> <a name="bootstrap_script_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.bootstrapScriptUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#bootstrap_script_url BdsBdsInstance#bootstrap_script_url}.

---

##### `cloud_sql_details`<sup>Optional</sup> <a name="cloud_sql_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.cloudSqlDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]

cloud_sql_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cloud_sql_details BdsBdsInstance#cloud_sql_details}

---

##### `cluster_profile`<sup>Optional</sup> <a name="cluster_profile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.clusterProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_profile BdsBdsInstance#cluster_profile}.

---

##### `compute_only_worker_node`<sup>Optional</sup> <a name="compute_only_worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.computeOnlyWorkerNode"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

compute_only_worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compute_only_worker_node BdsBdsInstance#compute_only_worker_node}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#defined_tags BdsBdsInstance#defined_tags}.

---

##### `edge_node`<sup>Optional</sup> <a name="edge_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.edgeNode"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

edge_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#edge_node BdsBdsInstance#edge_node}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#freeform_tags BdsBdsInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#id BdsBdsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_existing_nodes_shape`<sup>Optional</sup> <a name="ignore_existing_nodes_shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.ignoreExistingNodesShape"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ignore_existing_nodes_shape BdsBdsInstance#ignore_existing_nodes_shape}.

---

##### `is_cloud_sql_configured`<sup>Optional</sup> <a name="is_cloud_sql_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isCloudSqlConfigured"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_cloud_sql_configured BdsBdsInstance#is_cloud_sql_configured}.

---

##### `is_force_stop_jobs`<sup>Optional</sup> <a name="is_force_stop_jobs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isForceStopJobs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_force_stop_jobs BdsBdsInstance#is_force_stop_jobs}.

---

##### `is_kafka_configured`<sup>Optional</sup> <a name="is_kafka_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.isKafkaConfigured"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_kafka_configured BdsBdsInstance#is_kafka_configured}.

---

##### `kafka_broker_node`<sup>Optional</sup> <a name="kafka_broker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.kafkaBrokerNode"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

kafka_broker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kafka_broker_node BdsBdsInstance#kafka_broker_node}

---

##### `kerberos_realm_name`<sup>Optional</sup> <a name="kerberos_realm_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.kerberosRealmName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kerberos_realm_name BdsBdsInstance#kerberos_realm_name}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kms_key_id BdsBdsInstance#kms_key_id}.

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#network_config BdsBdsInstance#network_config}

---

##### `os_patch_version`<sup>Optional</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.osPatchVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#os_patch_version BdsBdsInstance#os_patch_version}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#state BdsBdsInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#timeouts BdsBdsInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putCloudSqlDetails">put_cloud_sql_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode">put_compute_only_worker_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode">put_edge_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode">put_kafka_broker_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode">put_master_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode">put_util_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode">put_worker_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetBootstrapScriptUrl">reset_bootstrap_script_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetCloudSqlDetails">reset_cloud_sql_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetClusterProfile">reset_cluster_profile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetComputeOnlyWorkerNode">reset_compute_only_worker_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetEdgeNode">reset_edge_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIgnoreExistingNodesShape">reset_ignore_existing_nodes_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsCloudSqlConfigured">reset_is_cloud_sql_configured</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsForceStopJobs">reset_is_force_stop_jobs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsKafkaConfigured">reset_is_kafka_configured</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKafkaBrokerNode">reset_kafka_broker_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKerberosRealmName">reset_kerberos_realm_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOsPatchVersion">reset_os_patch_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_sql_details` <a name="put_cloud_sql_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putCloudSqlDetails"></a>

```python
def put_cloud_sql_details(
  value: typing.Union[IResolvable, typing.List[BdsBdsInstanceCloudSqlDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putCloudSqlDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]

---

##### `put_compute_only_worker_node` <a name="put_compute_only_worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode"></a>

```python
def put_compute_only_worker_node(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig = None
) -> None
```

###### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

###### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode.parameter.blockVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

###### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putComputeOnlyWorkerNode.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

##### `put_edge_node` <a name="put_edge_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode"></a>

```python
def put_edge_node(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceEdgeNodeShapeConfig = None
) -> None
```

###### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

###### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode.parameter.blockVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

###### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putEdgeNode.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

##### `put_kafka_broker_node` <a name="put_kafka_broker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode"></a>

```python
def put_kafka_broker_node(
  number_of_kafka_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceKafkaBrokerNodeShapeConfig = None
) -> None
```

###### `number_of_kafka_nodes`<sup>Required</sup> <a name="number_of_kafka_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode.parameter.numberOfKafkaNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_kafka_nodes BdsBdsInstance#number_of_kafka_nodes}.

---

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

###### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode.parameter.blockVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

###### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putKafkaBrokerNode.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

##### `put_master_node` <a name="put_master_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode"></a>

```python
def put_master_node(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceMasterNodeShapeConfig = None
) -> None
```

###### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

###### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode.parameter.blockVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

###### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putMasterNode.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

##### `put_network_config` <a name="put_network_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putNetworkConfig"></a>

```python
def put_network_config(
  cidr_block: str = None,
  is_nat_gateway_required: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putNetworkConfig.parameter.cidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cidr_block BdsBdsInstance#cidr_block}.

---

###### `is_nat_gateway_required`<sup>Optional</sup> <a name="is_nat_gateway_required" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putNetworkConfig.parameter.isNatGatewayRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_nat_gateway_required BdsBdsInstance#is_nat_gateway_required}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#create BdsBdsInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#delete BdsBdsInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#update BdsBdsInstance#update}.

---

##### `put_util_node` <a name="put_util_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode"></a>

```python
def put_util_node(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceUtilNodeShapeConfig = None
) -> None
```

###### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

###### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode.parameter.blockVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

###### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putUtilNode.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

##### `put_worker_node` <a name="put_worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode"></a>

```python
def put_worker_node(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceWorkerNodeShapeConfig = None
) -> None
```

###### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

###### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode.parameter.blockVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

###### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.putWorkerNode.parameter.shapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

##### `reset_bootstrap_script_url` <a name="reset_bootstrap_script_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetBootstrapScriptUrl"></a>

```python
def reset_bootstrap_script_url() -> None
```

##### `reset_cloud_sql_details` <a name="reset_cloud_sql_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetCloudSqlDetails"></a>

```python
def reset_cloud_sql_details() -> None
```

##### `reset_cluster_profile` <a name="reset_cluster_profile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetClusterProfile"></a>

```python
def reset_cluster_profile() -> None
```

##### `reset_compute_only_worker_node` <a name="reset_compute_only_worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetComputeOnlyWorkerNode"></a>

```python
def reset_compute_only_worker_node() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_edge_node` <a name="reset_edge_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetEdgeNode"></a>

```python
def reset_edge_node() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_existing_nodes_shape` <a name="reset_ignore_existing_nodes_shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIgnoreExistingNodesShape"></a>

```python
def reset_ignore_existing_nodes_shape() -> None
```

##### `reset_is_cloud_sql_configured` <a name="reset_is_cloud_sql_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsCloudSqlConfigured"></a>

```python
def reset_is_cloud_sql_configured() -> None
```

##### `reset_is_force_stop_jobs` <a name="reset_is_force_stop_jobs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsForceStopJobs"></a>

```python
def reset_is_force_stop_jobs() -> None
```

##### `reset_is_kafka_configured` <a name="reset_is_kafka_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetIsKafkaConfigured"></a>

```python
def reset_is_kafka_configured() -> None
```

##### `reset_kafka_broker_node` <a name="reset_kafka_broker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKafkaBrokerNode"></a>

```python
def reset_kafka_broker_node() -> None
```

##### `reset_kerberos_realm_name` <a name="reset_kerberos_realm_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKerberosRealmName"></a>

```python
def reset_kerberos_realm_name() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_os_patch_version` <a name="reset_os_patch_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetOsPatchVersion"></a>

```python
def reset_os_patch_version() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BdsBdsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BdsBdsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BdsBdsInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BdsBdsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetails">cloud_sql_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList">BdsBdsInstanceCloudSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterDetails">cluster_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList">BdsBdsInstanceClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNode">compute_only_worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNode">edge_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference">BdsBdsInstanceEdgeNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNode">kafka_broker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference">BdsBdsInstanceKafkaBrokerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNode">master_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference">BdsBdsInstanceMasterNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfig">network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference">BdsBdsInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList">BdsBdsInstanceNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodesRequiringMaintenanceReboot">number_of_nodes_requiring_maintenance_reboot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference">BdsBdsInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNode">util_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference">BdsBdsInstanceUtilNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNode">worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference">BdsBdsInstanceWorkerNodeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrlInput">bootstrap_script_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetailsInput">cloud_sql_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPasswordInput">cluster_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfileInput">cluster_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKeyInput">cluster_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNodeInput">compute_only_worker_node_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNodeInput">edge_node_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShapeInput">ignore_existing_nodes_shape_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfiguredInput">is_cloud_sql_configured_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobsInput">is_force_stop_jobs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailabilityInput">is_high_availability_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfiguredInput">is_kafka_configured_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecureInput">is_secure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNodeInput">kafka_broker_node_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmNameInput">kerberos_realm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNodeInput">master_node_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfigInput">network_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersionInput">os_patch_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNodeInput">util_node_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNodeInput">worker_node_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrl">bootstrap_script_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfile">cluster_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShape">ignore_existing_nodes_shape</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfigured">is_cloud_sql_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobs">is_force_stop_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailability">is_high_availability</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfigured">is_kafka_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecure">is_secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmName">kerberos_realm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_sql_details`<sup>Required</sup> <a name="cloud_sql_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetails"></a>

```python
cloud_sql_details: BdsBdsInstanceCloudSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList">BdsBdsInstanceCloudSqlDetailsList</a>

---

##### `cluster_details`<sup>Required</sup> <a name="cluster_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterDetails"></a>

```python
cluster_details: BdsBdsInstanceClusterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList">BdsBdsInstanceClusterDetailsList</a>

---

##### `compute_only_worker_node`<sup>Required</sup> <a name="compute_only_worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNode"></a>

```python
compute_only_worker_node: BdsBdsInstanceComputeOnlyWorkerNodeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `edge_node`<sup>Required</sup> <a name="edge_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNode"></a>

```python
edge_node: BdsBdsInstanceEdgeNodeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference">BdsBdsInstanceEdgeNodeOutputReference</a>

---

##### `kafka_broker_node`<sup>Required</sup> <a name="kafka_broker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNode"></a>

```python
kafka_broker_node: BdsBdsInstanceKafkaBrokerNodeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference">BdsBdsInstanceKafkaBrokerNodeOutputReference</a>

---

##### `master_node`<sup>Required</sup> <a name="master_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNode"></a>

```python
master_node: BdsBdsInstanceMasterNodeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference">BdsBdsInstanceMasterNodeOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfig"></a>

```python
network_config: BdsBdsInstanceNetworkConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference">BdsBdsInstanceNetworkConfigOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.nodes"></a>

```python
nodes: BdsBdsInstanceNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList">BdsBdsInstanceNodesList</a>

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_nodes_requiring_maintenance_reboot`<sup>Required</sup> <a name="number_of_nodes_requiring_maintenance_reboot" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.numberOfNodesRequiringMaintenanceReboot"></a>

```python
number_of_nodes_requiring_maintenance_reboot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference">BdsBdsInstanceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `util_node`<sup>Required</sup> <a name="util_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNode"></a>

```python
util_node: BdsBdsInstanceUtilNodeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference">BdsBdsInstanceUtilNodeOutputReference</a>

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNode"></a>

```python
worker_node: BdsBdsInstanceWorkerNodeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference">BdsBdsInstanceWorkerNodeOutputReference</a>

---

##### `bootstrap_script_url_input`<sup>Optional</sup> <a name="bootstrap_script_url_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrlInput"></a>

```python
bootstrap_script_url_input: str
```

- *Type:* str

---

##### `cloud_sql_details_input`<sup>Optional</sup> <a name="cloud_sql_details_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.cloudSqlDetailsInput"></a>

```python
cloud_sql_details_input: typing.Union[IResolvable, typing.List[BdsBdsInstanceCloudSqlDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]

---

##### `cluster_admin_password_input`<sup>Optional</sup> <a name="cluster_admin_password_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPasswordInput"></a>

```python
cluster_admin_password_input: str
```

- *Type:* str

---

##### `cluster_profile_input`<sup>Optional</sup> <a name="cluster_profile_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfileInput"></a>

```python
cluster_profile_input: str
```

- *Type:* str

---

##### `cluster_public_key_input`<sup>Optional</sup> <a name="cluster_public_key_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKeyInput"></a>

```python
cluster_public_key_input: str
```

- *Type:* str

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_only_worker_node_input`<sup>Optional</sup> <a name="compute_only_worker_node_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.computeOnlyWorkerNodeInput"></a>

```python
compute_only_worker_node_input: BdsBdsInstanceComputeOnlyWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `edge_node_input`<sup>Optional</sup> <a name="edge_node_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.edgeNodeInput"></a>

```python
edge_node_input: BdsBdsInstanceEdgeNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_existing_nodes_shape_input`<sup>Optional</sup> <a name="ignore_existing_nodes_shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShapeInput"></a>

```python
ignore_existing_nodes_shape_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_cloud_sql_configured_input`<sup>Optional</sup> <a name="is_cloud_sql_configured_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfiguredInput"></a>

```python
is_cloud_sql_configured_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_force_stop_jobs_input`<sup>Optional</sup> <a name="is_force_stop_jobs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobsInput"></a>

```python
is_force_stop_jobs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_high_availability_input`<sup>Optional</sup> <a name="is_high_availability_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailabilityInput"></a>

```python
is_high_availability_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_kafka_configured_input`<sup>Optional</sup> <a name="is_kafka_configured_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfiguredInput"></a>

```python
is_kafka_configured_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secure_input`<sup>Optional</sup> <a name="is_secure_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecureInput"></a>

```python
is_secure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kafka_broker_node_input`<sup>Optional</sup> <a name="kafka_broker_node_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kafkaBrokerNodeInput"></a>

```python
kafka_broker_node_input: BdsBdsInstanceKafkaBrokerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

---

##### `kerberos_realm_name_input`<sup>Optional</sup> <a name="kerberos_realm_name_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmNameInput"></a>

```python
kerberos_realm_name_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `master_node_input`<sup>Optional</sup> <a name="master_node_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.masterNodeInput"></a>

```python
master_node_input: BdsBdsInstanceMasterNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.networkConfigInput"></a>

```python
network_config_input: BdsBdsInstanceNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

---

##### `os_patch_version_input`<sup>Optional</sup> <a name="os_patch_version_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersionInput"></a>

```python
os_patch_version_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BdsBdsInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>]

---

##### `util_node_input`<sup>Optional</sup> <a name="util_node_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.utilNodeInput"></a>

```python
util_node_input: BdsBdsInstanceUtilNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

---

##### `worker_node_input`<sup>Optional</sup> <a name="worker_node_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.workerNodeInput"></a>

```python
worker_node_input: BdsBdsInstanceWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

---

##### `bootstrap_script_url`<sup>Required</sup> <a name="bootstrap_script_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.bootstrapScriptUrl"></a>

```python
bootstrap_script_url: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `cluster_profile`<sup>Required</sup> <a name="cluster_profile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterProfile"></a>

```python
cluster_profile: str
```

- *Type:* str

---

##### `cluster_public_key`<sup>Required</sup> <a name="cluster_public_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterPublicKey"></a>

```python
cluster_public_key: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_existing_nodes_shape`<sup>Required</sup> <a name="ignore_existing_nodes_shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.ignoreExistingNodesShape"></a>

```python
ignore_existing_nodes_shape: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_cloud_sql_configured`<sup>Required</sup> <a name="is_cloud_sql_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isCloudSqlConfigured"></a>

```python
is_cloud_sql_configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_force_stop_jobs`<sup>Required</sup> <a name="is_force_stop_jobs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isForceStopJobs"></a>

```python
is_force_stop_jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_high_availability`<sup>Required</sup> <a name="is_high_availability" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isHighAvailability"></a>

```python
is_high_availability: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_kafka_configured`<sup>Required</sup> <a name="is_kafka_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isKafkaConfigured"></a>

```python
is_kafka_configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.isSecure"></a>

```python
is_secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos_realm_name`<sup>Required</sup> <a name="kerberos_realm_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kerberosRealmName"></a>

```python
kerberos_realm_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceCloudSqlDetails <a name="BdsBdsInstanceCloudSqlDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceCloudSqlDetails(
  shape: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

### BdsBdsInstanceCloudSqlDetailsKerberosDetails <a name="BdsBdsInstanceCloudSqlDetailsKerberosDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails()
```


### BdsBdsInstanceClusterDetails <a name="BdsBdsInstanceClusterDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceClusterDetails()
```


### BdsBdsInstanceComputeOnlyWorkerNode <a name="BdsBdsInstanceComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a></code> | shape_config block. |

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig <a name="BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceConfig <a name="BdsBdsInstanceConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_admin_password: str,
  cluster_public_key: str,
  cluster_version: str,
  compartment_id: str,
  display_name: str,
  is_high_availability: typing.Union[bool, IResolvable],
  is_secure: typing.Union[bool, IResolvable],
  master_node: BdsBdsInstanceMasterNode,
  util_node: BdsBdsInstanceUtilNode,
  worker_node: BdsBdsInstanceWorkerNode,
  bootstrap_script_url: str = None,
  cloud_sql_details: typing.Union[IResolvable, typing.List[BdsBdsInstanceCloudSqlDetails]] = None,
  cluster_profile: str = None,
  compute_only_worker_node: BdsBdsInstanceComputeOnlyWorkerNode = None,
  defined_tags: typing.Mapping[str] = None,
  edge_node: BdsBdsInstanceEdgeNode = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  ignore_existing_nodes_shape: typing.List[str] = None,
  is_cloud_sql_configured: typing.Union[bool, IResolvable] = None,
  is_force_stop_jobs: typing.Union[bool, IResolvable] = None,
  is_kafka_configured: typing.Union[bool, IResolvable] = None,
  kafka_broker_node: BdsBdsInstanceKafkaBrokerNode = None,
  kerberos_realm_name: str = None,
  kms_key_id: str = None,
  network_config: BdsBdsInstanceNetworkConfig = None,
  os_patch_version: str = None,
  state: str = None,
  timeouts: BdsBdsInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_admin_password BdsBdsInstance#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_public_key BdsBdsInstance#cluster_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_version BdsBdsInstance#cluster_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compartment_id BdsBdsInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#display_name BdsBdsInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isHighAvailability">is_high_availability</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_high_availability BdsBdsInstance#is_high_availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isSecure">is_secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_secure BdsBdsInstance#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.masterNode">master_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a></code> | master_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.utilNode">util_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a></code> | util_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.workerNode">worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a></code> | worker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.bootstrapScriptUrl">bootstrap_script_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#bootstrap_script_url BdsBdsInstance#bootstrap_script_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.cloudSqlDetails">cloud_sql_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]</code> | cloud_sql_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterProfile">cluster_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_profile BdsBdsInstance#cluster_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.computeOnlyWorkerNode">compute_only_worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a></code> | compute_only_worker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#defined_tags BdsBdsInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.edgeNode">edge_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a></code> | edge_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#freeform_tags BdsBdsInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#id BdsBdsInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.ignoreExistingNodesShape">ignore_existing_nodes_shape</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ignore_existing_nodes_shape BdsBdsInstance#ignore_existing_nodes_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isCloudSqlConfigured">is_cloud_sql_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_cloud_sql_configured BdsBdsInstance#is_cloud_sql_configured}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isForceStopJobs">is_force_stop_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_force_stop_jobs BdsBdsInstance#is_force_stop_jobs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isKafkaConfigured">is_kafka_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_kafka_configured BdsBdsInstance#is_kafka_configured}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kafkaBrokerNode">kafka_broker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a></code> | kafka_broker_node block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kerberosRealmName">kerberos_realm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kerberos_realm_name BdsBdsInstance#kerberos_realm_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kms_key_id BdsBdsInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.networkConfig">network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#os_patch_version BdsBdsInstance#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#state BdsBdsInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_admin_password BdsBdsInstance#cluster_admin_password}.

---

##### `cluster_public_key`<sup>Required</sup> <a name="cluster_public_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterPublicKey"></a>

```python
cluster_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_public_key BdsBdsInstance#cluster_public_key}.

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_version BdsBdsInstance#cluster_version}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compartment_id BdsBdsInstance#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#display_name BdsBdsInstance#display_name}.

---

##### `is_high_availability`<sup>Required</sup> <a name="is_high_availability" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isHighAvailability"></a>

```python
is_high_availability: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_high_availability BdsBdsInstance#is_high_availability}.

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isSecure"></a>

```python
is_secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_secure BdsBdsInstance#is_secure}.

---

##### `master_node`<sup>Required</sup> <a name="master_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.masterNode"></a>

```python
master_node: BdsBdsInstanceMasterNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

master_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#master_node BdsBdsInstance#master_node}

---

##### `util_node`<sup>Required</sup> <a name="util_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.utilNode"></a>

```python
util_node: BdsBdsInstanceUtilNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

util_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#util_node BdsBdsInstance#util_node}

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.workerNode"></a>

```python
worker_node: BdsBdsInstanceWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#worker_node BdsBdsInstance#worker_node}

---

##### `bootstrap_script_url`<sup>Optional</sup> <a name="bootstrap_script_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.bootstrapScriptUrl"></a>

```python
bootstrap_script_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#bootstrap_script_url BdsBdsInstance#bootstrap_script_url}.

---

##### `cloud_sql_details`<sup>Optional</sup> <a name="cloud_sql_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.cloudSqlDetails"></a>

```python
cloud_sql_details: typing.Union[IResolvable, typing.List[BdsBdsInstanceCloudSqlDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]

cloud_sql_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cloud_sql_details BdsBdsInstance#cloud_sql_details}

---

##### `cluster_profile`<sup>Optional</sup> <a name="cluster_profile" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.clusterProfile"></a>

```python
cluster_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cluster_profile BdsBdsInstance#cluster_profile}.

---

##### `compute_only_worker_node`<sup>Optional</sup> <a name="compute_only_worker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.computeOnlyWorkerNode"></a>

```python
compute_only_worker_node: BdsBdsInstanceComputeOnlyWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

compute_only_worker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#compute_only_worker_node BdsBdsInstance#compute_only_worker_node}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#defined_tags BdsBdsInstance#defined_tags}.

---

##### `edge_node`<sup>Optional</sup> <a name="edge_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.edgeNode"></a>

```python
edge_node: BdsBdsInstanceEdgeNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

edge_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#edge_node BdsBdsInstance#edge_node}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#freeform_tags BdsBdsInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#id BdsBdsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_existing_nodes_shape`<sup>Optional</sup> <a name="ignore_existing_nodes_shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.ignoreExistingNodesShape"></a>

```python
ignore_existing_nodes_shape: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ignore_existing_nodes_shape BdsBdsInstance#ignore_existing_nodes_shape}.

---

##### `is_cloud_sql_configured`<sup>Optional</sup> <a name="is_cloud_sql_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isCloudSqlConfigured"></a>

```python
is_cloud_sql_configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_cloud_sql_configured BdsBdsInstance#is_cloud_sql_configured}.

---

##### `is_force_stop_jobs`<sup>Optional</sup> <a name="is_force_stop_jobs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isForceStopJobs"></a>

```python
is_force_stop_jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_force_stop_jobs BdsBdsInstance#is_force_stop_jobs}.

---

##### `is_kafka_configured`<sup>Optional</sup> <a name="is_kafka_configured" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.isKafkaConfigured"></a>

```python
is_kafka_configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_kafka_configured BdsBdsInstance#is_kafka_configured}.

---

##### `kafka_broker_node`<sup>Optional</sup> <a name="kafka_broker_node" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kafkaBrokerNode"></a>

```python
kafka_broker_node: BdsBdsInstanceKafkaBrokerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

kafka_broker_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kafka_broker_node BdsBdsInstance#kafka_broker_node}

---

##### `kerberos_realm_name`<sup>Optional</sup> <a name="kerberos_realm_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kerberosRealmName"></a>

```python
kerberos_realm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kerberos_realm_name BdsBdsInstance#kerberos_realm_name}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#kms_key_id BdsBdsInstance#kms_key_id}.

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.networkConfig"></a>

```python
network_config: BdsBdsInstanceNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#network_config BdsBdsInstance#network_config}

---

##### `os_patch_version`<sup>Optional</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#os_patch_version BdsBdsInstance#os_patch_version}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#state BdsBdsInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceConfig.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#timeouts BdsBdsInstance#timeouts}

---

### BdsBdsInstanceEdgeNode <a name="BdsBdsInstanceEdgeNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceEdgeNode(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceEdgeNodeShapeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a></code> | shape_config block. |

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceEdgeNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceEdgeNodeShapeConfig <a name="BdsBdsInstanceEdgeNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceKafkaBrokerNode <a name="BdsBdsInstanceKafkaBrokerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode(
  number_of_kafka_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceKafkaBrokerNodeShapeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.numberOfKafkaNodes">number_of_kafka_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_kafka_nodes BdsBdsInstance#number_of_kafka_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a></code> | shape_config block. |

---

##### `number_of_kafka_nodes`<sup>Required</sup> <a name="number_of_kafka_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.numberOfKafkaNodes"></a>

```python
number_of_kafka_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_kafka_nodes BdsBdsInstance#number_of_kafka_nodes}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceKafkaBrokerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceKafkaBrokerNodeShapeConfig <a name="BdsBdsInstanceKafkaBrokerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceMasterNode <a name="BdsBdsInstanceMasterNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceMasterNode(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceMasterNodeShapeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a></code> | shape_config block. |

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceMasterNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceMasterNodeShapeConfig <a name="BdsBdsInstanceMasterNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceNetworkConfig <a name="BdsBdsInstanceNetworkConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNetworkConfig(
  cidr_block: str = None,
  is_nat_gateway_required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cidr_block BdsBdsInstance#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.isNatGatewayRequired">is_nat_gateway_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_nat_gateway_required BdsBdsInstance#is_nat_gateway_required}. |

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#cidr_block BdsBdsInstance#cidr_block}.

---

##### `is_nat_gateway_required`<sup>Optional</sup> <a name="is_nat_gateway_required" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig.property.isNatGatewayRequired"></a>

```python
is_nat_gateway_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#is_nat_gateway_required BdsBdsInstance#is_nat_gateway_required}.

---

### BdsBdsInstanceNodes <a name="BdsBdsInstanceNodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNodes()
```


### BdsBdsInstanceNodesAttachedBlockVolumes <a name="BdsBdsInstanceNodesAttachedBlockVolumes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes()
```


### BdsBdsInstanceTimeouts <a name="BdsBdsInstanceTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#create BdsBdsInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#delete BdsBdsInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#update BdsBdsInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#create BdsBdsInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#delete BdsBdsInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#update BdsBdsInstance#update}.

---

### BdsBdsInstanceUtilNode <a name="BdsBdsInstanceUtilNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceUtilNode(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceUtilNodeShapeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a></code> | shape_config block. |

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceUtilNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceUtilNodeShapeConfig <a name="BdsBdsInstanceUtilNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

### BdsBdsInstanceWorkerNode <a name="BdsBdsInstanceWorkerNode" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceWorkerNode(
  number_of_nodes: typing.Union[int, float],
  shape: str,
  subnet_id: str,
  block_volume_size_in_gbs: str = None,
  shape_config: BdsBdsInstanceWorkerNodeShapeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a></code> | shape_config block. |

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#number_of_nodes BdsBdsInstance#number_of_nodes}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape BdsBdsInstance#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#subnet_id BdsBdsInstance#subnet_id}.

---

##### `block_volume_size_in_gbs`<sup>Optional</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#block_volume_size_in_gbs BdsBdsInstance#block_volume_size_in_gbs}.

---

##### `shape_config`<sup>Optional</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#shape_config BdsBdsInstance#shape_config}

---

### BdsBdsInstanceWorkerNodeShapeConfig <a name="BdsBdsInstanceWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

##### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceCloudSqlDetailsKerberosDetailsList <a name="BdsBdsInstanceCloudSqlDetailsKerberosDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference <a name="BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile">keytab_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails">BdsBdsInstanceCloudSqlDetailsKerberosDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keytab_file`<sup>Required</sup> <a name="keytab_file" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile"></a>

```python
keytab_file: str
```

- *Type:* str

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceCloudSqlDetailsKerberosDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetails">BdsBdsInstanceCloudSqlDetailsKerberosDetails</a>

---


### BdsBdsInstanceCloudSqlDetailsList <a name="BdsBdsInstanceCloudSqlDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsBdsInstanceCloudSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BdsBdsInstanceCloudSqlDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]]

---


### BdsBdsInstanceCloudSqlDetailsOutputReference <a name="BdsBdsInstanceCloudSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers">is_kerberos_mapped_to_database_users</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.kerberosDetails">kerberos_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList">BdsBdsInstanceCloudSqlDetailsKerberosDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_kerberos_mapped_to_database_users`<sup>Required</sup> <a name="is_kerberos_mapped_to_database_users" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers"></a>

```python
is_kerberos_mapped_to_database_users: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kerberos_details`<sup>Required</sup> <a name="kerberos_details" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.kerberosDetails"></a>

```python
kerberos_details: BdsBdsInstanceCloudSqlDetailsKerberosDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsKerberosDetailsList">BdsBdsInstanceCloudSqlDetailsKerberosDetailsList</a>

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsBdsInstanceCloudSqlDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceCloudSqlDetails">BdsBdsInstanceCloudSqlDetails</a>]

---


### BdsBdsInstanceClusterDetailsList <a name="BdsBdsInstanceClusterDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceClusterDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsBdsInstanceClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BdsBdsInstanceClusterDetailsOutputReference <a name="BdsBdsInstanceClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.ambariUrl">ambari_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdaVersion">bda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdCellVersion">bd_cell_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdmVersion">bdm_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdsVersion">bds_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bigDataManagerUrl">big_data_manager_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.clouderaManagerUrl">cloudera_manager_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.csqlCellVersion">csql_cell_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.hueServerUrl">hue_server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.jupyterHubUrl">jupyter_hub_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.odhVersion">odh_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeRefreshed">time_refreshed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails">BdsBdsInstanceClusterDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambari_url`<sup>Required</sup> <a name="ambari_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.ambariUrl"></a>

```python
ambari_url: str
```

- *Type:* str

---

##### `bda_version`<sup>Required</sup> <a name="bda_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdaVersion"></a>

```python
bda_version: str
```

- *Type:* str

---

##### `bd_cell_version`<sup>Required</sup> <a name="bd_cell_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdCellVersion"></a>

```python
bd_cell_version: str
```

- *Type:* str

---

##### `bdm_version`<sup>Required</sup> <a name="bdm_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdmVersion"></a>

```python
bdm_version: str
```

- *Type:* str

---

##### `bds_version`<sup>Required</sup> <a name="bds_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bdsVersion"></a>

```python
bds_version: str
```

- *Type:* str

---

##### `big_data_manager_url`<sup>Required</sup> <a name="big_data_manager_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.bigDataManagerUrl"></a>

```python
big_data_manager_url: str
```

- *Type:* str

---

##### `cloudera_manager_url`<sup>Required</sup> <a name="cloudera_manager_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.clouderaManagerUrl"></a>

```python
cloudera_manager_url: str
```

- *Type:* str

---

##### `csql_cell_version`<sup>Required</sup> <a name="csql_cell_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.csqlCellVersion"></a>

```python
csql_cell_version: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `hue_server_url`<sup>Required</sup> <a name="hue_server_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.hueServerUrl"></a>

```python
hue_server_url: str
```

- *Type:* str

---

##### `jupyter_hub_url`<sup>Required</sup> <a name="jupyter_hub_url" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.jupyterHubUrl"></a>

```python
jupyter_hub_url: str
```

- *Type:* str

---

##### `odh_version`<sup>Required</sup> <a name="odh_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.odhVersion"></a>

```python
odh_version: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_refreshed`<sup>Required</sup> <a name="time_refreshed" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.timeRefreshed"></a>

```python
time_refreshed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceClusterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceClusterDetails">BdsBdsInstanceClusterDetails</a>

---


### BdsBdsInstanceComputeOnlyWorkerNodeOutputReference <a name="BdsBdsInstanceComputeOnlyWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetBlockVolumeSizeInGbs">reset_block_volume_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetShapeConfig">reset_shape_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig"></a>

```python
def put_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

###### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig.parameter.nvmes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

##### `reset_block_volume_size_in_gbs` <a name="reset_block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```python
def reset_block_volume_size_in_gbs() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput">block_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference</a>

---

##### `block_volume_size_in_gbs_input`<sup>Optional</sup> <a name="block_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```python
block_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeConfigInput"></a>

```python
shape_config_input: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceComputeOnlyWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNode">BdsBdsInstanceComputeOnlyWorkerNode</a>

---


### BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference <a name="BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetNvmes">reset_nvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_nvmes` <a name="reset_nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetNvmes"></a>

```python
def reset_nvmes() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmesInput">nvmes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes_input`<sup>Optional</sup> <a name="nvmes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmesInput"></a>

```python
nvmes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig">BdsBdsInstanceComputeOnlyWorkerNodeShapeConfig</a>

---


### BdsBdsInstanceEdgeNodeOutputReference <a name="BdsBdsInstanceEdgeNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetBlockVolumeSizeInGbs">reset_block_volume_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetShapeConfig">reset_shape_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig"></a>

```python
def put_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

###### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig.parameter.nvmes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

##### `reset_block_volume_size_in_gbs` <a name="reset_block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```python
def reset_block_volume_size_in_gbs() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference">BdsBdsInstanceEdgeNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbsInput">block_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceEdgeNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference">BdsBdsInstanceEdgeNodeShapeConfigOutputReference</a>

---

##### `block_volume_size_in_gbs_input`<sup>Optional</sup> <a name="block_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```python
block_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeConfigInput"></a>

```python
shape_config_input: BdsBdsInstanceEdgeNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceEdgeNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNode">BdsBdsInstanceEdgeNode</a>

---


### BdsBdsInstanceEdgeNodeShapeConfigOutputReference <a name="BdsBdsInstanceEdgeNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetNvmes">reset_nvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_nvmes` <a name="reset_nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetNvmes"></a>

```python
def reset_nvmes() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmesInput">nvmes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes_input`<sup>Optional</sup> <a name="nvmes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmesInput"></a>

```python
nvmes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceEdgeNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceEdgeNodeShapeConfig">BdsBdsInstanceEdgeNodeShapeConfig</a>

---


### BdsBdsInstanceKafkaBrokerNodeOutputReference <a name="BdsBdsInstanceKafkaBrokerNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetBlockVolumeSizeInGbs">reset_block_volume_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetShapeConfig">reset_shape_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig"></a>

```python
def put_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

###### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig.parameter.nvmes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

##### `reset_block_volume_size_in_gbs` <a name="reset_block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```python
def reset_block_volume_size_in_gbs() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference">BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbsInput">block_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodesInput">number_of_kafka_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes">number_of_kafka_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference">BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference</a>

---

##### `block_volume_size_in_gbs_input`<sup>Optional</sup> <a name="block_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```python
block_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `number_of_kafka_nodes_input`<sup>Optional</sup> <a name="number_of_kafka_nodes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodesInput"></a>

```python
number_of_kafka_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeConfigInput"></a>

```python
shape_config_input: BdsBdsInstanceKafkaBrokerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_kafka_nodes`<sup>Required</sup> <a name="number_of_kafka_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes"></a>

```python
number_of_kafka_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceKafkaBrokerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNode">BdsBdsInstanceKafkaBrokerNode</a>

---


### BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference <a name="BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetNvmes">reset_nvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_nvmes` <a name="reset_nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetNvmes"></a>

```python
def reset_nvmes() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmesInput">nvmes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes_input`<sup>Optional</sup> <a name="nvmes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmesInput"></a>

```python
nvmes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceKafkaBrokerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceKafkaBrokerNodeShapeConfig">BdsBdsInstanceKafkaBrokerNodeShapeConfig</a>

---


### BdsBdsInstanceMasterNodeOutputReference <a name="BdsBdsInstanceMasterNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetBlockVolumeSizeInGbs">reset_block_volume_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetShapeConfig">reset_shape_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig"></a>

```python
def put_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

###### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig.parameter.nvmes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

##### `reset_block_volume_size_in_gbs` <a name="reset_block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```python
def reset_block_volume_size_in_gbs() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference">BdsBdsInstanceMasterNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbsInput">block_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceMasterNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference">BdsBdsInstanceMasterNodeShapeConfigOutputReference</a>

---

##### `block_volume_size_in_gbs_input`<sup>Optional</sup> <a name="block_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```python
block_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeConfigInput"></a>

```python
shape_config_input: BdsBdsInstanceMasterNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceMasterNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNode">BdsBdsInstanceMasterNode</a>

---


### BdsBdsInstanceMasterNodeShapeConfigOutputReference <a name="BdsBdsInstanceMasterNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetNvmes">reset_nvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_nvmes` <a name="reset_nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetNvmes"></a>

```python
def reset_nvmes() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmesInput">nvmes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes_input`<sup>Optional</sup> <a name="nvmes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmesInput"></a>

```python
nvmes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceMasterNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceMasterNodeShapeConfig">BdsBdsInstanceMasterNodeShapeConfig</a>

---


### BdsBdsInstanceNetworkConfigOutputReference <a name="BdsBdsInstanceNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetIsNatGatewayRequired">reset_is_nat_gateway_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_block` <a name="reset_cidr_block" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_is_nat_gateway_required` <a name="reset_is_nat_gateway_required" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.resetIsNatGatewayRequired"></a>

```python
def reset_is_nat_gateway_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequiredInput">is_nat_gateway_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequired">is_nat_gateway_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `is_nat_gateway_required_input`<sup>Optional</sup> <a name="is_nat_gateway_required_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequiredInput"></a>

```python
is_nat_gateway_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `is_nat_gateway_required`<sup>Required</sup> <a name="is_nat_gateway_required" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.isNatGatewayRequired"></a>

```python
is_nat_gateway_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNetworkConfig">BdsBdsInstanceNetworkConfig</a>

---


### BdsBdsInstanceNodesAttachedBlockVolumesList <a name="BdsBdsInstanceNodesAttachedBlockVolumesList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsBdsInstanceNodesAttachedBlockVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BdsBdsInstanceNodesAttachedBlockVolumesOutputReference <a name="BdsBdsInstanceNodesAttachedBlockVolumesOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId">volume_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs">volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes">BdsBdsInstanceNodesAttachedBlockVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_attachment_id`<sup>Required</sup> <a name="volume_attachment_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId"></a>

```python
volume_attachment_id: str
```

- *Type:* str

---

##### `volume_size_in_gbs`<sup>Required</sup> <a name="volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs"></a>

```python
volume_size_in_gbs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceNodesAttachedBlockVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumes">BdsBdsInstanceNodesAttachedBlockVolumes</a>

---


### BdsBdsInstanceNodesList <a name="BdsBdsInstanceNodesList" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsBdsInstanceNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BdsBdsInstanceNodesOutputReference <a name="BdsBdsInstanceNodesOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.attachedBlockVolumes">attached_block_volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList">BdsBdsInstanceNodesAttachedBlockVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.isRebootRequired">is_reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.localDisksTotalSizeInGbs">local_disks_total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.sshFingerprint">ssh_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeMaintenanceRebootDue">time_maintenance_reboot_due</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes">BdsBdsInstanceNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attached_block_volumes`<sup>Required</sup> <a name="attached_block_volumes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.attachedBlockVolumes"></a>

```python
attached_block_volumes: BdsBdsInstanceNodesAttachedBlockVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesAttachedBlockVolumesList">BdsBdsInstanceNodesAttachedBlockVolumesList</a>

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_reboot_required`<sup>Required</sup> <a name="is_reboot_required" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.isRebootRequired"></a>

```python
is_reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `local_disks_total_size_in_gbs`<sup>Required</sup> <a name="local_disks_total_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.localDisksTotalSizeInGbs"></a>

```python
local_disks_total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_fingerprint`<sup>Required</sup> <a name="ssh_fingerprint" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.sshFingerprint"></a>

```python
ssh_fingerprint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_maintenance_reboot_due`<sup>Required</sup> <a name="time_maintenance_reboot_due" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.timeMaintenanceRebootDue"></a>

```python
time_maintenance_reboot_due: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodesOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceNodes">BdsBdsInstanceNodes</a>

---


### BdsBdsInstanceTimeoutsOutputReference <a name="BdsBdsInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsBdsInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceTimeouts">BdsBdsInstanceTimeouts</a>]

---


### BdsBdsInstanceUtilNodeOutputReference <a name="BdsBdsInstanceUtilNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetBlockVolumeSizeInGbs">reset_block_volume_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetShapeConfig">reset_shape_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig"></a>

```python
def put_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

###### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig.parameter.nvmes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

##### `reset_block_volume_size_in_gbs` <a name="reset_block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```python
def reset_block_volume_size_in_gbs() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference">BdsBdsInstanceUtilNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbsInput">block_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceUtilNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference">BdsBdsInstanceUtilNodeShapeConfigOutputReference</a>

---

##### `block_volume_size_in_gbs_input`<sup>Optional</sup> <a name="block_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```python
block_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeConfigInput"></a>

```python
shape_config_input: BdsBdsInstanceUtilNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceUtilNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNode">BdsBdsInstanceUtilNode</a>

---


### BdsBdsInstanceUtilNodeShapeConfigOutputReference <a name="BdsBdsInstanceUtilNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetNvmes">reset_nvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_nvmes` <a name="reset_nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetNvmes"></a>

```python
def reset_nvmes() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmesInput">nvmes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes_input`<sup>Optional</sup> <a name="nvmes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmesInput"></a>

```python
nvmes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceUtilNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceUtilNodeShapeConfig">BdsBdsInstanceUtilNodeShapeConfig</a>

---


### BdsBdsInstanceWorkerNodeOutputReference <a name="BdsBdsInstanceWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig">put_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetBlockVolumeSizeInGbs">reset_block_volume_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetShapeConfig">reset_shape_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shape_config` <a name="put_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig"></a>

```python
def put_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  nvmes: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#memory_in_gbs BdsBdsInstance#memory_in_gbs}.

---

###### `nvmes`<sup>Optional</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig.parameter.nvmes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#nvmes BdsBdsInstance#nvmes}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.putShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance#ocpus BdsBdsInstance#ocpus}.

---

##### `reset_block_volume_size_in_gbs` <a name="reset_block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetBlockVolumeSizeInGbs"></a>

```python
def reset_block_volume_size_in_gbs() -> None
```

##### `reset_shape_config` <a name="reset_shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.resetShapeConfig"></a>

```python
def reset_shape_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference">BdsBdsInstanceWorkerNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput">block_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfigInput">shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: BdsBdsInstanceWorkerNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference">BdsBdsInstanceWorkerNodeShapeConfigOutputReference</a>

---

##### `block_volume_size_in_gbs_input`<sup>Optional</sup> <a name="block_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbsInput"></a>

```python
block_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_config_input`<sup>Optional</sup> <a name="shape_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeConfigInput"></a>

```python
shape_config_input: BdsBdsInstanceWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNode">BdsBdsInstanceWorkerNode</a>

---


### BdsBdsInstanceWorkerNodeShapeConfigOutputReference <a name="BdsBdsInstanceWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance

bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetNvmes">reset_nvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_nvmes` <a name="reset_nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetNvmes"></a>

```python
def reset_nvmes() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmesInput">nvmes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes_input`<sup>Optional</sup> <a name="nvmes_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmesInput"></a>

```python
nvmes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstance.BdsBdsInstanceWorkerNodeShapeConfig">BdsBdsInstanceWorkerNodeShapeConfig</a>

---



