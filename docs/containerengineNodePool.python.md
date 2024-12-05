# `containerengineNodePool` Submodule <a name="`containerengineNodePool` Submodule" id="rhizo-co-terraform-provider-oci.containerengineNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineNodePool <a name="ContainerengineNodePool" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool oci_containerengine_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  compartment_id: str,
  name: str,
  node_shape: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  initial_node_labels: typing.Union[IResolvable, typing.List[ContainerengineNodePoolInitialNodeLabels]] = None,
  kubernetes_version: str = None,
  node_config_details: ContainerengineNodePoolNodeConfigDetails = None,
  node_eviction_node_pool_settings: ContainerengineNodePoolNodeEvictionNodePoolSettings = None,
  node_image_id: str = None,
  node_image_name: str = None,
  node_metadata: typing.Mapping[str] = None,
  node_pool_cycling_details: ContainerengineNodePoolNodePoolCyclingDetails = None,
  node_shape_config: ContainerengineNodePoolNodeShapeConfig = None,
  node_source_details: ContainerengineNodePoolNodeSourceDetails = None,
  quantity_per_subnet: typing.Union[int, float] = None,
  ssh_public_key: str = None,
  subnet_ids: typing.List[str] = None,
  timeouts: ContainerengineNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeShape">node_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.initialNodeLabels">initial_node_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]</code> | initial_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeConfigDetails">node_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | node_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeEvictionNodePoolSettings">node_eviction_node_pool_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | node_eviction_node_pool_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeImageId">node_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeImageName">node_image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeMetadata">node_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodePoolCyclingDetails">node_pool_cycling_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | node_pool_cycling_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeShapeConfig">node_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | node_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeSourceDetails">node_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | node_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.quantityPerSubnet">quantity_per_subnet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}.

---

##### `node_shape`<sup>Required</sup> <a name="node_shape" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_node_labels`<sup>Optional</sup> <a name="initial_node_labels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.initialNodeLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]

initial_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#initial_node_labels ContainerengineNodePool#initial_node_labels}

---

##### `kubernetes_version`<sup>Optional</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.kubernetesVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}.

---

##### `node_config_details`<sup>Optional</sup> <a name="node_config_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeConfigDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

node_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_config_details ContainerengineNodePool#node_config_details}

---

##### `node_eviction_node_pool_settings`<sup>Optional</sup> <a name="node_eviction_node_pool_settings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeEvictionNodePoolSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

node_eviction_node_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_eviction_node_pool_settings ContainerengineNodePool#node_eviction_node_pool_settings}

---

##### `node_image_id`<sup>Optional</sup> <a name="node_image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}.

---

##### `node_image_name`<sup>Optional</sup> <a name="node_image_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeImageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}.

---

##### `node_metadata`<sup>Optional</sup> <a name="node_metadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeMetadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}.

---

##### `node_pool_cycling_details`<sup>Optional</sup> <a name="node_pool_cycling_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodePoolCyclingDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

node_pool_cycling_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_cycling_details ContainerengineNodePool#node_pool_cycling_details}

---

##### `node_shape_config`<sup>Optional</sup> <a name="node_shape_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

node_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape_config ContainerengineNodePool#node_shape_config}

---

##### `node_source_details`<sup>Optional</sup> <a name="node_source_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.nodeSourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

node_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_source_details ContainerengineNodePool#node_source_details}

---

##### `quantity_per_subnet`<sup>Optional</sup> <a name="quantity_per_subnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.quantityPerSubnet"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}.

---

##### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.sshPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#timeouts ContainerengineNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels">put_initial_node_labels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails">put_node_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings">put_node_eviction_node_pool_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails">put_node_pool_cycling_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig">put_node_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails">put_node_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetInitialNodeLabels">reset_initial_node_labels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetKubernetesVersion">reset_kubernetes_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeConfigDetails">reset_node_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeEvictionNodePoolSettings">reset_node_eviction_node_pool_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageId">reset_node_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageName">reset_node_image_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeMetadata">reset_node_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodePoolCyclingDetails">reset_node_pool_cycling_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeShapeConfig">reset_node_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeSourceDetails">reset_node_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetQuantityPerSubnet">reset_quantity_per_subnet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSshPublicKey">reset_ssh_public_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_initial_node_labels` <a name="put_initial_node_labels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels"></a>

```python
def put_initial_node_labels(
  value: typing.Union[IResolvable, typing.List[ContainerengineNodePoolInitialNodeLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]

---

##### `put_node_config_details` <a name="put_node_config_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails"></a>

```python
def put_node_config_details(
  placement_configs: typing.Union[IResolvable, typing.List[ContainerengineNodePoolNodeConfigDetailsPlacementConfigs]],
  size: typing.Union[int, float],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  node_pool_pod_network_option_details: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails = None,
  nsg_ids: typing.List[str] = None
) -> None
```

###### `placement_configs`<sup>Required</sup> <a name="placement_configs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.placementConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]

placement_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#placement_configs ContainerengineNodePool#placement_configs}

---

###### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}.

---

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

###### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.isPvEncryptionInTransitEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}.

---

###### `node_pool_pod_network_option_details`<sup>Optional</sup> <a name="node_pool_pod_network_option_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.nodePoolPodNetworkOptionDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

node_pool_pod_network_option_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_pod_network_option_details ContainerengineNodePool#node_pool_pod_network_option_details}

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}.

---

##### `put_node_eviction_node_pool_settings` <a name="put_node_eviction_node_pool_settings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings"></a>

```python
def put_node_eviction_node_pool_settings(
  eviction_grace_duration: str = None,
  is_force_delete_after_grace_duration: typing.Union[bool, IResolvable] = None
) -> None
```

###### `eviction_grace_duration`<sup>Optional</sup> <a name="eviction_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings.parameter.evictionGraceDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}.

---

###### `is_force_delete_after_grace_duration`<sup>Optional</sup> <a name="is_force_delete_after_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings.parameter.isForceDeleteAfterGraceDuration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}.

---

##### `put_node_pool_cycling_details` <a name="put_node_pool_cycling_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails"></a>

```python
def put_node_pool_cycling_details(
  is_node_cycling_enabled: typing.Union[bool, IResolvable] = None,
  maximum_surge: str = None,
  maximum_unavailable: str = None
) -> None
```

###### `is_node_cycling_enabled`<sup>Optional</sup> <a name="is_node_cycling_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails.parameter.isNodeCyclingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}.

---

###### `maximum_surge`<sup>Optional</sup> <a name="maximum_surge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails.parameter.maximumSurge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}.

---

###### `maximum_unavailable`<sup>Optional</sup> <a name="maximum_unavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails.parameter.maximumUnavailable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}.

---

##### `put_node_shape_config` <a name="put_node_shape_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig"></a>

```python
def put_node_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}.

---

##### `put_node_source_details` <a name="put_node_source_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails"></a>

```python
def put_node_source_details(
  image_id: str,
  source_type: str,
  boot_volume_size_in_gbs: str = None
) -> None
```

###### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}.

---

###### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}.

---

###### `boot_volume_size_in_gbs`<sup>Optional</sup> <a name="boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails.parameter.bootVolumeSizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_node_labels` <a name="reset_initial_node_labels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetInitialNodeLabels"></a>

```python
def reset_initial_node_labels() -> None
```

##### `reset_kubernetes_version` <a name="reset_kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetKubernetesVersion"></a>

```python
def reset_kubernetes_version() -> None
```

##### `reset_node_config_details` <a name="reset_node_config_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeConfigDetails"></a>

```python
def reset_node_config_details() -> None
```

##### `reset_node_eviction_node_pool_settings` <a name="reset_node_eviction_node_pool_settings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeEvictionNodePoolSettings"></a>

```python
def reset_node_eviction_node_pool_settings() -> None
```

##### `reset_node_image_id` <a name="reset_node_image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageId"></a>

```python
def reset_node_image_id() -> None
```

##### `reset_node_image_name` <a name="reset_node_image_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageName"></a>

```python
def reset_node_image_name() -> None
```

##### `reset_node_metadata` <a name="reset_node_metadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeMetadata"></a>

```python
def reset_node_metadata() -> None
```

##### `reset_node_pool_cycling_details` <a name="reset_node_pool_cycling_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodePoolCyclingDetails"></a>

```python
def reset_node_pool_cycling_details() -> None
```

##### `reset_node_shape_config` <a name="reset_node_shape_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeShapeConfig"></a>

```python
def reset_node_shape_config() -> None
```

##### `reset_node_source_details` <a name="reset_node_source_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeSourceDetails"></a>

```python
def reset_node_source_details() -> None
```

##### `reset_quantity_per_subnet` <a name="reset_quantity_per_subnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetQuantityPerSubnet"></a>

```python
def reset_quantity_per_subnet() -> None
```

##### `reset_ssh_public_key` <a name="reset_ssh_public_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSshPublicKey"></a>

```python
def reset_ssh_public_key() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerengineNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerengineNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerengineNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerengineNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabels">initial_node_labels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList">ContainerengineNodePoolInitialNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetails">node_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettings">node_eviction_node_pool_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference">ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetails">node_pool_cycling_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference">ContainerengineNodePoolNodePoolCyclingDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList">ContainerengineNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfig">node_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference">ContainerengineNodePoolNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSource">node_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList">ContainerengineNodePoolNodeSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetails">node_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference">ContainerengineNodePoolNodeSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference">ContainerengineNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabelsInput">initial_node_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersionInput">kubernetes_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetailsInput">node_config_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettingsInput">node_eviction_node_pool_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageIdInput">node_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageNameInput">node_image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadataInput">node_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetailsInput">node_pool_cycling_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfigInput">node_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeInput">node_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetailsInput">node_source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnetInput">quantity_per_subnet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKeyInput">ssh_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageId">node_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageName">node_image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadata">node_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShape">node_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnet">quantity_per_subnet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `initial_node_labels`<sup>Required</sup> <a name="initial_node_labels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabels"></a>

```python
initial_node_labels: ContainerengineNodePoolInitialNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList">ContainerengineNodePoolInitialNodeLabelsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `node_config_details`<sup>Required</sup> <a name="node_config_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetails"></a>

```python
node_config_details: ContainerengineNodePoolNodeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsOutputReference</a>

---

##### `node_eviction_node_pool_settings`<sup>Required</sup> <a name="node_eviction_node_pool_settings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettings"></a>

```python
node_eviction_node_pool_settings: ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference">ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference</a>

---

##### `node_pool_cycling_details`<sup>Required</sup> <a name="node_pool_cycling_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetails"></a>

```python
node_pool_cycling_details: ContainerengineNodePoolNodePoolCyclingDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference">ContainerengineNodePoolNodePoolCyclingDetailsOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodes"></a>

```python
nodes: ContainerengineNodePoolNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList">ContainerengineNodePoolNodesList</a>

---

##### `node_shape_config`<sup>Required</sup> <a name="node_shape_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfig"></a>

```python
node_shape_config: ContainerengineNodePoolNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference">ContainerengineNodePoolNodeShapeConfigOutputReference</a>

---

##### `node_source`<sup>Required</sup> <a name="node_source" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSource"></a>

```python
node_source: ContainerengineNodePoolNodeSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList">ContainerengineNodePoolNodeSourceList</a>

---

##### `node_source_details`<sup>Required</sup> <a name="node_source_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetails"></a>

```python
node_source_details: ContainerengineNodePoolNodeSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference">ContainerengineNodePoolNodeSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeouts"></a>

```python
timeouts: ContainerengineNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference">ContainerengineNodePoolTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_node_labels_input`<sup>Optional</sup> <a name="initial_node_labels_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabelsInput"></a>

```python
initial_node_labels_input: typing.Union[IResolvable, typing.List[ContainerengineNodePoolInitialNodeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]

---

##### `kubernetes_version_input`<sup>Optional</sup> <a name="kubernetes_version_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersionInput"></a>

```python
kubernetes_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_config_details_input`<sup>Optional</sup> <a name="node_config_details_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetailsInput"></a>

```python
node_config_details_input: ContainerengineNodePoolNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---

##### `node_eviction_node_pool_settings_input`<sup>Optional</sup> <a name="node_eviction_node_pool_settings_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettingsInput"></a>

```python
node_eviction_node_pool_settings_input: ContainerengineNodePoolNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---

##### `node_image_id_input`<sup>Optional</sup> <a name="node_image_id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageIdInput"></a>

```python
node_image_id_input: str
```

- *Type:* str

---

##### `node_image_name_input`<sup>Optional</sup> <a name="node_image_name_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageNameInput"></a>

```python
node_image_name_input: str
```

- *Type:* str

---

##### `node_metadata_input`<sup>Optional</sup> <a name="node_metadata_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadataInput"></a>

```python
node_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_pool_cycling_details_input`<sup>Optional</sup> <a name="node_pool_cycling_details_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetailsInput"></a>

```python
node_pool_cycling_details_input: ContainerengineNodePoolNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---

##### `node_shape_config_input`<sup>Optional</sup> <a name="node_shape_config_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfigInput"></a>

```python
node_shape_config_input: ContainerengineNodePoolNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---

##### `node_shape_input`<sup>Optional</sup> <a name="node_shape_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeInput"></a>

```python
node_shape_input: str
```

- *Type:* str

---

##### `node_source_details_input`<sup>Optional</sup> <a name="node_source_details_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetailsInput"></a>

```python
node_source_details_input: ContainerengineNodePoolNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---

##### `quantity_per_subnet_input`<sup>Optional</sup> <a name="quantity_per_subnet_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnetInput"></a>

```python
quantity_per_subnet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_public_key_input`<sup>Optional</sup> <a name="ssh_public_key_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKeyInput"></a>

```python
ssh_public_key_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerengineNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_image_id`<sup>Required</sup> <a name="node_image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageId"></a>

```python
node_image_id: str
```

- *Type:* str

---

##### `node_image_name`<sup>Required</sup> <a name="node_image_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageName"></a>

```python
node_image_name: str
```

- *Type:* str

---

##### `node_metadata`<sup>Required</sup> <a name="node_metadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadata"></a>

```python
node_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_shape`<sup>Required</sup> <a name="node_shape" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShape"></a>

```python
node_shape: str
```

- *Type:* str

---

##### `quantity_per_subnet`<sup>Required</sup> <a name="quantity_per_subnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnet"></a>

```python
quantity_per_subnet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineNodePoolConfig <a name="ContainerengineNodePoolConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  compartment_id: str,
  name: str,
  node_shape: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  initial_node_labels: typing.Union[IResolvable, typing.List[ContainerengineNodePoolInitialNodeLabels]] = None,
  kubernetes_version: str = None,
  node_config_details: ContainerengineNodePoolNodeConfigDetails = None,
  node_eviction_node_pool_settings: ContainerengineNodePoolNodeEvictionNodePoolSettings = None,
  node_image_id: str = None,
  node_image_name: str = None,
  node_metadata: typing.Mapping[str] = None,
  node_pool_cycling_details: ContainerengineNodePoolNodePoolCyclingDetails = None,
  node_shape_config: ContainerengineNodePoolNodeShapeConfig = None,
  node_source_details: ContainerengineNodePoolNodeSourceDetails = None,
  quantity_per_subnet: typing.Union[int, float] = None,
  ssh_public_key: str = None,
  subnet_ids: typing.List[str] = None,
  timeouts: ContainerengineNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShape">node_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.initialNodeLabels">initial_node_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]</code> | initial_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeConfigDetails">node_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | node_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeEvictionNodePoolSettings">node_eviction_node_pool_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | node_eviction_node_pool_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageId">node_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageName">node_image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeMetadata">node_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodePoolCyclingDetails">node_pool_cycling_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | node_pool_cycling_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShapeConfig">node_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | node_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeSourceDetails">node_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | node_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.quantityPerSubnet">quantity_per_subnet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}.

---

##### `node_shape`<sup>Required</sup> <a name="node_shape" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShape"></a>

```python
node_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_node_labels`<sup>Optional</sup> <a name="initial_node_labels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.initialNodeLabels"></a>

```python
initial_node_labels: typing.Union[IResolvable, typing.List[ContainerengineNodePoolInitialNodeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]

initial_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#initial_node_labels ContainerengineNodePool#initial_node_labels}

---

##### `kubernetes_version`<sup>Optional</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}.

---

##### `node_config_details`<sup>Optional</sup> <a name="node_config_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeConfigDetails"></a>

```python
node_config_details: ContainerengineNodePoolNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

node_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_config_details ContainerengineNodePool#node_config_details}

---

##### `node_eviction_node_pool_settings`<sup>Optional</sup> <a name="node_eviction_node_pool_settings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeEvictionNodePoolSettings"></a>

```python
node_eviction_node_pool_settings: ContainerengineNodePoolNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

node_eviction_node_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_eviction_node_pool_settings ContainerengineNodePool#node_eviction_node_pool_settings}

---

##### `node_image_id`<sup>Optional</sup> <a name="node_image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageId"></a>

```python
node_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}.

---

##### `node_image_name`<sup>Optional</sup> <a name="node_image_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageName"></a>

```python
node_image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}.

---

##### `node_metadata`<sup>Optional</sup> <a name="node_metadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeMetadata"></a>

```python
node_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}.

---

##### `node_pool_cycling_details`<sup>Optional</sup> <a name="node_pool_cycling_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodePoolCyclingDetails"></a>

```python
node_pool_cycling_details: ContainerengineNodePoolNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

node_pool_cycling_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_cycling_details ContainerengineNodePool#node_pool_cycling_details}

---

##### `node_shape_config`<sup>Optional</sup> <a name="node_shape_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShapeConfig"></a>

```python
node_shape_config: ContainerengineNodePoolNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

node_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape_config ContainerengineNodePool#node_shape_config}

---

##### `node_source_details`<sup>Optional</sup> <a name="node_source_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeSourceDetails"></a>

```python
node_source_details: ContainerengineNodePoolNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

node_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_source_details ContainerengineNodePool#node_source_details}

---

##### `quantity_per_subnet`<sup>Optional</sup> <a name="quantity_per_subnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.quantityPerSubnet"></a>

```python
quantity_per_subnet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}.

---

##### `ssh_public_key`<sup>Optional</sup> <a name="ssh_public_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.timeouts"></a>

```python
timeouts: ContainerengineNodePoolTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#timeouts ContainerengineNodePool#timeouts}

---

### ContainerengineNodePoolInitialNodeLabels <a name="ContainerengineNodePoolInitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolInitialNodeLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#key ContainerengineNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#value ContainerengineNodePool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#key ContainerengineNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#value ContainerengineNodePool#value}.

---

### ContainerengineNodePoolNodeConfigDetails <a name="ContainerengineNodePoolNodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetails(
  placement_configs: typing.Union[IResolvable, typing.List[ContainerengineNodePoolNodeConfigDetailsPlacementConfigs]],
  size: typing.Union[int, float],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  node_pool_pod_network_option_details: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails = None,
  nsg_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.placementConfigs">placement_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]</code> | placement_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nodePoolPodNetworkOptionDetails">node_pool_pod_network_option_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | node_pool_pod_network_option_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}. |

---

##### `placement_configs`<sup>Required</sup> <a name="placement_configs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.placementConfigs"></a>

```python
placement_configs: typing.Union[IResolvable, typing.List[ContainerengineNodePoolNodeConfigDetailsPlacementConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]

placement_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#placement_configs ContainerengineNodePool#placement_configs}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

##### `is_pv_encryption_in_transit_enabled`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}.

---

##### `node_pool_pod_network_option_details`<sup>Optional</sup> <a name="node_pool_pod_network_option_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nodePoolPodNetworkOptionDetails"></a>

```python
node_pool_pod_network_option_details: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

node_pool_pod_network_option_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_pod_network_option_details ContainerengineNodePool#node_pool_pod_network_option_details}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}.

---

### ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails <a name="ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails(
  cni_type: str,
  max_pods_per_node: typing.Union[int, float] = None,
  pod_nsg_ids: typing.List[str] = None,
  pod_subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.cniType">cni_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podNsgIds">pod_nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podSubnetIds">pod_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}. |

---

##### `cni_type`<sup>Required</sup> <a name="cni_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.cniType"></a>

```python
cni_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}.

---

##### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}.

---

##### `pod_nsg_ids`<sup>Optional</sup> <a name="pod_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podNsgIds"></a>

```python
pod_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}.

---

##### `pod_subnet_ids`<sup>Optional</sup> <a name="pod_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podSubnetIds"></a>

```python
pod_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}.

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigs <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs(
  availability_domain: str,
  subnet_id: str,
  capacity_reservation_id: str = None,
  fault_domains: typing.List[str] = None,
  preemptible_node_config: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#availability_domain ContainerengineNodePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_id ContainerengineNodePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#capacity_reservation_id ContainerengineNodePool#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#fault_domains ContainerengineNodePool#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.preemptibleNodeConfig">preemptible_node_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | preemptible_node_config block. |

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#availability_domain ContainerengineNodePool#availability_domain}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_id ContainerengineNodePool#subnet_id}.

---

##### `capacity_reservation_id`<sup>Optional</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#capacity_reservation_id ContainerengineNodePool#capacity_reservation_id}.

---

##### `fault_domains`<sup>Optional</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#fault_domains ContainerengineNodePool#fault_domains}.

---

##### `preemptible_node_config`<sup>Optional</sup> <a name="preemptible_node_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.preemptibleNodeConfig"></a>

```python
preemptible_node_config: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

preemptible_node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#preemptible_node_config ContainerengineNodePool#preemptible_node_config}

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig(
  preemption_action: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.property.preemptionAction">preemption_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `preemption_action`<sup>Required</sup> <a name="preemption_action" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.property.preemptionAction"></a>

```python
preemption_action: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#preemption_action ContainerengineNodePool#preemption_action}

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction(
  type: str,
  is_preserve_boot_volume: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.isPreserveBootVolume">is_preserve_boot_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}.

---

##### `is_preserve_boot_volume`<sup>Optional</sup> <a name="is_preserve_boot_volume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.isPreserveBootVolume"></a>

```python
is_preserve_boot_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}.

---

### ContainerengineNodePoolNodeEvictionNodePoolSettings <a name="ContainerengineNodePoolNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings(
  eviction_grace_duration: str = None,
  is_force_delete_after_grace_duration: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.evictionGraceDuration">eviction_grace_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.isForceDeleteAfterGraceDuration">is_force_delete_after_grace_duration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}. |

---

##### `eviction_grace_duration`<sup>Optional</sup> <a name="eviction_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.evictionGraceDuration"></a>

```python
eviction_grace_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}.

---

##### `is_force_delete_after_grace_duration`<sup>Optional</sup> <a name="is_force_delete_after_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.isForceDeleteAfterGraceDuration"></a>

```python
is_force_delete_after_grace_duration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}.

---

### ContainerengineNodePoolNodePoolCyclingDetails <a name="ContainerengineNodePoolNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails(
  is_node_cycling_enabled: typing.Union[bool, IResolvable] = None,
  maximum_surge: str = None,
  maximum_unavailable: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.isNodeCyclingEnabled">is_node_cycling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumSurge">maximum_surge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumUnavailable">maximum_unavailable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}. |

---

##### `is_node_cycling_enabled`<sup>Optional</sup> <a name="is_node_cycling_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.isNodeCyclingEnabled"></a>

```python
is_node_cycling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}.

---

##### `maximum_surge`<sup>Optional</sup> <a name="maximum_surge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumSurge"></a>

```python
maximum_surge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}.

---

##### `maximum_unavailable`<sup>Optional</sup> <a name="maximum_unavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumUnavailable"></a>

```python
maximum_unavailable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}.

---

### ContainerengineNodePoolNodes <a name="ContainerengineNodePoolNodes" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodes()
```


### ContainerengineNodePoolNodesError <a name="ContainerengineNodePoolNodesError" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodesError()
```


### ContainerengineNodePoolNodeShapeConfig <a name="ContainerengineNodePoolNodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}.

---

### ContainerengineNodePoolNodeSource <a name="ContainerengineNodePoolNodeSource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeSource()
```


### ContainerengineNodePoolNodeSourceDetails <a name="ContainerengineNodePoolNodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeSourceDetails(
  image_id: str,
  source_type: str,
  boot_volume_size_in_gbs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.bootVolumeSizeInGbs">boot_volume_size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}. |

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}.

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}.

---

##### `boot_volume_size_in_gbs`<sup>Optional</sup> <a name="boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.bootVolumeSizeInGbs"></a>

```python
boot_volume_size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}.

---

### ContainerengineNodePoolTimeouts <a name="ContainerengineNodePoolTimeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineNodePoolInitialNodeLabelsList <a name="ContainerengineNodePoolInitialNodeLabelsList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineNodePoolInitialNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineNodePoolInitialNodeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]]

---


### ContainerengineNodePoolInitialNodeLabelsOutputReference <a name="ContainerengineNodePoolInitialNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineNodePoolInitialNodeLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>]

---


### ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetMaxPodsPerNode">reset_max_pods_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodNsgIds">reset_pod_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodSubnetIds">reset_pod_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_pods_per_node` <a name="reset_max_pods_per_node" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetMaxPodsPerNode"></a>

```python
def reset_max_pods_per_node() -> None
```

##### `reset_pod_nsg_ids` <a name="reset_pod_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodNsgIds"></a>

```python
def reset_pod_nsg_ids() -> None
```

##### `reset_pod_subnet_ids` <a name="reset_pod_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodSubnetIds"></a>

```python
def reset_pod_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniTypeInput">cni_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNodeInput">max_pods_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIdsInput">pod_nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIdsInput">pod_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType">cni_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds">pod_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds">pod_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cni_type_input`<sup>Optional</sup> <a name="cni_type_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniTypeInput"></a>

```python
cni_type_input: str
```

- *Type:* str

---

##### `max_pods_per_node_input`<sup>Optional</sup> <a name="max_pods_per_node_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNodeInput"></a>

```python
max_pods_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pod_nsg_ids_input`<sup>Optional</sup> <a name="pod_nsg_ids_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIdsInput"></a>

```python
pod_nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pod_subnet_ids_input`<sup>Optional</sup> <a name="pod_subnet_ids_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIdsInput"></a>

```python
pod_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cni_type`<sup>Required</sup> <a name="cni_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType"></a>

```python
cni_type: str
```

- *Type:* str

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pod_nsg_ids`<sup>Required</sup> <a name="pod_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds"></a>

```python
pod_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pod_subnet_ids`<sup>Required</sup> <a name="pod_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds"></a>

```python
pod_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---


### ContainerengineNodePoolNodeConfigDetailsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails">put_node_pool_pod_network_option_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs">put_placement_configs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetIsPvEncryptionInTransitEnabled">reset_is_pv_encryption_in_transit_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNodePoolPodNetworkOptionDetails">reset_node_pool_pod_network_option_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_pool_pod_network_option_details` <a name="put_node_pool_pod_network_option_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails"></a>

```python
def put_node_pool_pod_network_option_details(
  cni_type: str,
  max_pods_per_node: typing.Union[int, float] = None,
  pod_nsg_ids: typing.List[str] = None,
  pod_subnet_ids: typing.List[str] = None
) -> None
```

###### `cni_type`<sup>Required</sup> <a name="cni_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails.parameter.cniType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}.

---

###### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails.parameter.maxPodsPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}.

---

###### `pod_nsg_ids`<sup>Optional</sup> <a name="pod_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails.parameter.podNsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}.

---

###### `pod_subnet_ids`<sup>Optional</sup> <a name="pod_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails.parameter.podSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}.

---

##### `put_placement_configs` <a name="put_placement_configs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs"></a>

```python
def put_placement_configs(
  value: typing.Union[IResolvable, typing.List[ContainerengineNodePoolNodeConfigDetailsPlacementConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_is_pv_encryption_in_transit_enabled` <a name="reset_is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```python
def reset_is_pv_encryption_in_transit_enabled() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_node_pool_pod_network_option_details` <a name="reset_node_pool_pod_network_option_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNodePoolPodNetworkOptionDetails"></a>

```python
def reset_node_pool_pod_network_option_details() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails">node_pool_pod_network_option_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs">placement_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabledInput">is_pv_encryption_in_transit_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetailsInput">node_pool_pod_network_option_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigsInput">placement_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_pool_pod_network_option_details`<sup>Required</sup> <a name="node_pool_pod_network_option_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails"></a>

```python
node_pool_pod_network_option_details: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference</a>

---

##### `placement_configs`<sup>Required</sup> <a name="placement_configs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs"></a>

```python
placement_configs: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_pv_encryption_in_transit_enabled_input`<sup>Optional</sup> <a name="is_pv_encryption_in_transit_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```python
is_pv_encryption_in_transit_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `node_pool_pod_network_option_details_input`<sup>Optional</sup> <a name="node_pool_pod_network_option_details_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetailsInput"></a>

```python
node_pool_pod_network_option_details_input: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `placement_configs_input`<sup>Optional</sup> <a name="placement_configs_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigsInput"></a>

```python
placement_configs_input: typing.Union[IResolvable, typing.List[ContainerengineNodePoolNodeConfigDetailsPlacementConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `is_pv_encryption_in_transit_enabled`<sup>Required</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineNodePoolNodeConfigDetailsPlacementConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]]

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig">put_preemptible_node_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetCapacityReservationId">reset_capacity_reservation_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetFaultDomains">reset_fault_domains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetPreemptibleNodeConfig">reset_preemptible_node_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_preemptible_node_config` <a name="put_preemptible_node_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig"></a>

```python
def put_preemptible_node_config(
  preemption_action: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
) -> None
```

###### `preemption_action`<sup>Required</sup> <a name="preemption_action" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig.parameter.preemptionAction"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#preemption_action ContainerengineNodePool#preemption_action}

---

##### `reset_capacity_reservation_id` <a name="reset_capacity_reservation_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetCapacityReservationId"></a>

```python
def reset_capacity_reservation_id() -> None
```

##### `reset_fault_domains` <a name="reset_fault_domains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetFaultDomains"></a>

```python
def reset_fault_domains() -> None
```

##### `reset_preemptible_node_config` <a name="reset_preemptible_node_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetPreemptibleNodeConfig"></a>

```python
def reset_preemptible_node_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig">preemptible_node_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationIdInput">capacity_reservation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomainsInput">fault_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfigInput">preemptible_node_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preemptible_node_config`<sup>Required</sup> <a name="preemptible_node_config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig"></a>

```python
preemptible_node_config: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `capacity_reservation_id_input`<sup>Optional</sup> <a name="capacity_reservation_id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationIdInput"></a>

```python
capacity_reservation_id_input: str
```

- *Type:* str

---

##### `fault_domains_input`<sup>Optional</sup> <a name="fault_domains_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomainsInput"></a>

```python
fault_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible_node_config_input`<sup>Optional</sup> <a name="preemptible_node_config_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfigInput"></a>

```python
preemptible_node_config_input: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineNodePoolNodeConfigDetailsPlacementConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>]

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction">put_preemption_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_preemption_action` <a name="put_preemption_action" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction"></a>

```python
def put_preemption_action(
  type: str,
  is_preserve_boot_volume: typing.Union[bool, IResolvable] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}.

---

###### `is_preserve_boot_volume`<sup>Optional</sup> <a name="is_preserve_boot_volume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction.parameter.isPreserveBootVolume"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction">preemption_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionActionInput">preemption_action_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preemption_action`<sup>Required</sup> <a name="preemption_action" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction"></a>

```python
preemption_action: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference</a>

---

##### `preemption_action_input`<sup>Optional</sup> <a name="preemption_action_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionActionInput"></a>

```python
preemption_action_input: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resetIsPreserveBootVolume">reset_is_preserve_boot_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_preserve_boot_volume` <a name="reset_is_preserve_boot_volume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resetIsPreserveBootVolume"></a>

```python
def reset_is_preserve_boot_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolumeInput">is_preserve_boot_volume_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume">is_preserve_boot_volume</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_preserve_boot_volume_input`<sup>Optional</sup> <a name="is_preserve_boot_volume_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolumeInput"></a>

```python
is_preserve_boot_volume_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `is_preserve_boot_volume`<sup>Required</sup> <a name="is_preserve_boot_volume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume"></a>

```python
is_preserve_boot_volume: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


### ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference <a name="ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetEvictionGraceDuration">reset_eviction_grace_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetIsForceDeleteAfterGraceDuration">reset_is_force_delete_after_grace_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_eviction_grace_duration` <a name="reset_eviction_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetEvictionGraceDuration"></a>

```python
def reset_eviction_grace_duration() -> None
```

##### `reset_is_force_delete_after_grace_duration` <a name="reset_is_force_delete_after_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetIsForceDeleteAfterGraceDuration"></a>

```python
def reset_is_force_delete_after_grace_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDurationInput">eviction_grace_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDurationInput">is_force_delete_after_grace_duration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration">eviction_grace_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration">is_force_delete_after_grace_duration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eviction_grace_duration_input`<sup>Optional</sup> <a name="eviction_grace_duration_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDurationInput"></a>

```python
eviction_grace_duration_input: str
```

- *Type:* str

---

##### `is_force_delete_after_grace_duration_input`<sup>Optional</sup> <a name="is_force_delete_after_grace_duration_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDurationInput"></a>

```python
is_force_delete_after_grace_duration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eviction_grace_duration`<sup>Required</sup> <a name="eviction_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration"></a>

```python
eviction_grace_duration: str
```

- *Type:* str

---

##### `is_force_delete_after_grace_duration`<sup>Required</sup> <a name="is_force_delete_after_grace_duration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration"></a>

```python
is_force_delete_after_grace_duration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---


### ContainerengineNodePoolNodePoolCyclingDetailsOutputReference <a name="ContainerengineNodePoolNodePoolCyclingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetIsNodeCyclingEnabled">reset_is_node_cycling_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumSurge">reset_maximum_surge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumUnavailable">reset_maximum_unavailable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_node_cycling_enabled` <a name="reset_is_node_cycling_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetIsNodeCyclingEnabled"></a>

```python
def reset_is_node_cycling_enabled() -> None
```

##### `reset_maximum_surge` <a name="reset_maximum_surge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumSurge"></a>

```python
def reset_maximum_surge() -> None
```

##### `reset_maximum_unavailable` <a name="reset_maximum_unavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumUnavailable"></a>

```python
def reset_maximum_unavailable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabledInput">is_node_cycling_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurgeInput">maximum_surge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailableInput">maximum_unavailable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled">is_node_cycling_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge">maximum_surge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable">maximum_unavailable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_node_cycling_enabled_input`<sup>Optional</sup> <a name="is_node_cycling_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabledInput"></a>

```python
is_node_cycling_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_surge_input`<sup>Optional</sup> <a name="maximum_surge_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurgeInput"></a>

```python
maximum_surge_input: str
```

- *Type:* str

---

##### `maximum_unavailable_input`<sup>Optional</sup> <a name="maximum_unavailable_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailableInput"></a>

```python
maximum_unavailable_input: str
```

- *Type:* str

---

##### `is_node_cycling_enabled`<sup>Required</sup> <a name="is_node_cycling_enabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled"></a>

```python
is_node_cycling_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_surge`<sup>Required</sup> <a name="maximum_surge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge"></a>

```python
maximum_surge: str
```

- *Type:* str

---

##### `maximum_unavailable`<sup>Required</sup> <a name="maximum_unavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable"></a>

```python
maximum_unavailable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---


### ContainerengineNodePoolNodesErrorList <a name="ContainerengineNodePoolNodesErrorList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodesErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineNodePoolNodesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerengineNodePoolNodesErrorOutputReference <a name="ContainerengineNodePoolNodesErrorOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError">ContainerengineNodePoolNodesError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodesError
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError">ContainerengineNodePoolNodesError</a>

---


### ContainerengineNodePoolNodeShapeConfigOutputReference <a name="ContainerengineNodePoolNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---


### ContainerengineNodePoolNodesList <a name="ContainerengineNodePoolNodesList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerengineNodePoolNodeSourceDetailsOutputReference <a name="ContainerengineNodePoolNodeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resetBootVolumeSizeInGbs">reset_boot_volume_size_in_gbs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boot_volume_size_in_gbs` <a name="reset_boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```python
def reset_boot_volume_size_in_gbs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">boot_volume_size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs">boot_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_volume_size_in_gbs_input`<sup>Optional</sup> <a name="boot_volume_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```python
boot_volume_size_in_gbs_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `boot_volume_size_in_gbs`<sup>Required</sup> <a name="boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```python
boot_volume_size_in_gbs: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---


### ContainerengineNodePoolNodeSourceList <a name="ContainerengineNodePoolNodeSourceList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineNodePoolNodeSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerengineNodePoolNodeSourceOutputReference <a name="ContainerengineNodePoolNodeSourceOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource">ContainerengineNodePoolNodeSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodeSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource">ContainerengineNodePoolNodeSource</a>

---


### ContainerengineNodePoolNodesOutputReference <a name="ContainerengineNodePoolNodesOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.error">error</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList">ContainerengineNodePoolNodesErrorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes">ContainerengineNodePoolNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.error"></a>

```python
error: ContainerengineNodePoolNodesErrorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList">ContainerengineNodePoolNodesErrorList</a>

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineNodePoolNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes">ContainerengineNodePoolNodes</a>

---


### ContainerengineNodePoolTimeoutsOutputReference <a name="ContainerengineNodePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_node_pool

containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>]

---



