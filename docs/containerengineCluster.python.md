# `containerengineCluster` Submodule <a name="`containerengineCluster` Submodule" id="rhizo-co-terraform-provider-oci.containerengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineCluster <a name="ContainerengineCluster" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster oci_containerengine_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineCluster(
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
  kubernetes_version: str,
  name: str,
  vcn_id: str,
  cluster_pod_network_options: typing.Union[IResolvable, typing.List[ContainerengineClusterClusterPodNetworkOptions]] = None,
  defined_tags: typing.Mapping[str] = None,
  endpoint_config: ContainerengineClusterEndpointConfig = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  image_policy_config: ContainerengineClusterImagePolicyConfig = None,
  kms_key_id: str = None,
  options: ContainerengineClusterOptions = None,
  timeouts: ContainerengineClusterTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.clusterPodNetworkOptions">cluster_pod_network_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]</code> | cluster_pod_network_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.endpointConfig">endpoint_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | endpoint_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.imagePolicyConfig">image_policy_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | image_policy_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}.

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.kubernetesVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}.

---

##### `cluster_pod_network_options`<sup>Optional</sup> <a name="cluster_pod_network_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.clusterPodNetworkOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]

cluster_pod_network_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cluster_pod_network_options ContainerengineCluster#cluster_pod_network_options}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `endpoint_config`<sup>Optional</sup> <a name="endpoint_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.endpointConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#endpoint_config ContainerengineCluster#endpoint_config}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_policy_config`<sup>Optional</sup> <a name="image_policy_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.imagePolicyConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

image_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#image_policy_config ContainerengineCluster#image_policy_config}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.options"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#options ContainerengineCluster#options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#timeouts ContainerengineCluster#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions">put_cluster_pod_network_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig">put_endpoint_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig">put_image_policy_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetClusterPodNetworkOptions">reset_cluster_pod_network_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetEndpointConfig">reset_endpoint_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetImagePolicyConfig">reset_image_policy_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cluster_pod_network_options` <a name="put_cluster_pod_network_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions"></a>

```python
def put_cluster_pod_network_options(
  value: typing.Union[IResolvable, typing.List[ContainerengineClusterClusterPodNetworkOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]

---

##### `put_endpoint_config` <a name="put_endpoint_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig"></a>

```python
def put_endpoint_config(
  subnet_id: str,
  is_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  nsg_ids: typing.List[str] = None
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}.

---

###### `is_public_ip_enabled`<sup>Optional</sup> <a name="is_public_ip_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig.parameter.isPublicIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}.

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}.

---

##### `put_image_policy_config` <a name="put_image_policy_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig"></a>

```python
def put_image_policy_config(
  is_policy_enabled: typing.Union[bool, IResolvable] = None,
  key_details: typing.Union[IResolvable, typing.List[ContainerengineClusterImagePolicyConfigKeyDetails]] = None
) -> None
```

###### `is_policy_enabled`<sup>Optional</sup> <a name="is_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig.parameter.isPolicyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}.

---

###### `key_details`<sup>Optional</sup> <a name="key_details" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig.parameter.keyDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]

key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key_details ContainerengineCluster#key_details}

---

##### `put_options` <a name="put_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions"></a>

```python
def put_options(
  add_ons: ContainerengineClusterOptionsAddOns = None,
  admission_controller_options: ContainerengineClusterOptionsAdmissionControllerOptions = None,
  kubernetes_network_config: ContainerengineClusterOptionsKubernetesNetworkConfig = None,
  open_id_connect_discovery: ContainerengineClusterOptionsOpenIdConnectDiscovery = None,
  open_id_connect_token_authentication_config: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig = None,
  persistent_volume_config: ContainerengineClusterOptionsPersistentVolumeConfig = None,
  service_lb_config: ContainerengineClusterOptionsServiceLbConfig = None,
  service_lb_subnet_ids: typing.List[str] = None
) -> None
```

###### `add_ons`<sup>Optional</sup> <a name="add_ons" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.addOns"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

add_ons block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#add_ons ContainerengineCluster#add_ons}

---

###### `admission_controller_options`<sup>Optional</sup> <a name="admission_controller_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.admissionControllerOptions"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

admission_controller_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#admission_controller_options ContainerengineCluster#admission_controller_options}

---

###### `kubernetes_network_config`<sup>Optional</sup> <a name="kubernetes_network_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.kubernetesNetworkConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

kubernetes_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_network_config ContainerengineCluster#kubernetes_network_config}

---

###### `open_id_connect_discovery`<sup>Optional</sup> <a name="open_id_connect_discovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.openIdConnectDiscovery"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

open_id_connect_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_discovery ContainerengineCluster#open_id_connect_discovery}

---

###### `open_id_connect_token_authentication_config`<sup>Optional</sup> <a name="open_id_connect_token_authentication_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.openIdConnectTokenAuthenticationConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

open_id_connect_token_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_token_authentication_config ContainerengineCluster#open_id_connect_token_authentication_config}

---

###### `persistent_volume_config`<sup>Optional</sup> <a name="persistent_volume_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.persistentVolumeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

persistent_volume_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#persistent_volume_config ContainerengineCluster#persistent_volume_config}

---

###### `service_lb_config`<sup>Optional</sup> <a name="service_lb_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.serviceLbConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

service_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_config ContainerengineCluster#service_lb_config}

---

###### `service_lb_subnet_ids`<sup>Optional</sup> <a name="service_lb_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.serviceLbSubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}.

---

##### `reset_cluster_pod_network_options` <a name="reset_cluster_pod_network_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetClusterPodNetworkOptions"></a>

```python
def reset_cluster_pod_network_options() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_endpoint_config` <a name="reset_endpoint_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetEndpointConfig"></a>

```python
def reset_endpoint_config() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_policy_config` <a name="reset_image_policy_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetImagePolicyConfig"></a>

```python
def reset_image_policy_config() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_options` <a name="reset_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerengineCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerengineCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.availableKubernetesUpgrades">available_kubernetes_upgrades</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptions">cluster_pod_network_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList">ContainerengineClusterClusterPodNetworkOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfig">endpoint_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference">ContainerengineClusterEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList">ContainerengineClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfig">image_policy_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference">ContainerengineClusterImagePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList">ContainerengineClusterMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.openIdConnectDiscoveryEndpoint">open_id_connect_discovery_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference">ContainerengineClusterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference">ContainerengineClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptionsInput">cluster_pod_network_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfigInput">endpoint_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfigInput">image_policy_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersionInput">kubernetes_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.optionsInput">options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_kubernetes_upgrades`<sup>Required</sup> <a name="available_kubernetes_upgrades" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.availableKubernetesUpgrades"></a>

```python
available_kubernetes_upgrades: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_pod_network_options`<sup>Required</sup> <a name="cluster_pod_network_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptions"></a>

```python
cluster_pod_network_options: ContainerengineClusterClusterPodNetworkOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList">ContainerengineClusterClusterPodNetworkOptionsList</a>

---

##### `endpoint_config`<sup>Required</sup> <a name="endpoint_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfig"></a>

```python
endpoint_config: ContainerengineClusterEndpointConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference">ContainerengineClusterEndpointConfigOutputReference</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpoints"></a>

```python
endpoints: ContainerengineClusterEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList">ContainerengineClusterEndpointsList</a>

---

##### `image_policy_config`<sup>Required</sup> <a name="image_policy_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfig"></a>

```python
image_policy_config: ContainerengineClusterImagePolicyConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference">ContainerengineClusterImagePolicyConfigOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.metadata"></a>

```python
metadata: ContainerengineClusterMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList">ContainerengineClusterMetadataList</a>

---

##### `open_id_connect_discovery_endpoint`<sup>Required</sup> <a name="open_id_connect_discovery_endpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.openIdConnectDiscoveryEndpoint"></a>

```python
open_id_connect_discovery_endpoint: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.options"></a>

```python
options: ContainerengineClusterOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference">ContainerengineClusterOptionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeouts"></a>

```python
timeouts: ContainerengineClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference">ContainerengineClusterTimeoutsOutputReference</a>

---

##### `cluster_pod_network_options_input`<sup>Optional</sup> <a name="cluster_pod_network_options_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptionsInput"></a>

```python
cluster_pod_network_options_input: typing.Union[IResolvable, typing.List[ContainerengineClusterClusterPodNetworkOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoint_config_input`<sup>Optional</sup> <a name="endpoint_config_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfigInput"></a>

```python
endpoint_config_input: ContainerengineClusterEndpointConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_policy_config_input`<sup>Optional</sup> <a name="image_policy_config_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfigInput"></a>

```python
image_policy_config_input: ContainerengineClusterImagePolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kubernetes_version_input`<sup>Optional</sup> <a name="kubernetes_version_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersionInput"></a>

```python
kubernetes_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.optionsInput"></a>

```python
options_input: ContainerengineClusterOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerengineClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineClusterClusterPodNetworkOptions <a name="ContainerengineClusterClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterClusterPodNetworkOptions(
  cni_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.property.cniType">cni_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cni_type ContainerengineCluster#cni_type}. |

---

##### `cni_type`<sup>Required</sup> <a name="cni_type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.property.cniType"></a>

```python
cni_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cni_type ContainerengineCluster#cni_type}.

---

### ContainerengineClusterConfig <a name="ContainerengineClusterConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  kubernetes_version: str,
  name: str,
  vcn_id: str,
  cluster_pod_network_options: typing.Union[IResolvable, typing.List[ContainerengineClusterClusterPodNetworkOptions]] = None,
  defined_tags: typing.Mapping[str] = None,
  endpoint_config: ContainerengineClusterEndpointConfig = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  image_policy_config: ContainerengineClusterImagePolicyConfig = None,
  kms_key_id: str = None,
  options: ContainerengineClusterOptions = None,
  timeouts: ContainerengineClusterTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.clusterPodNetworkOptions">cluster_pod_network_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]</code> | cluster_pod_network_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.endpointConfig">endpoint_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | endpoint_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.imagePolicyConfig">image_policy_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | image_policy_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}.

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}.

---

##### `cluster_pod_network_options`<sup>Optional</sup> <a name="cluster_pod_network_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.clusterPodNetworkOptions"></a>

```python
cluster_pod_network_options: typing.Union[IResolvable, typing.List[ContainerengineClusterClusterPodNetworkOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]

cluster_pod_network_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cluster_pod_network_options ContainerengineCluster#cluster_pod_network_options}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `endpoint_config`<sup>Optional</sup> <a name="endpoint_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.endpointConfig"></a>

```python
endpoint_config: ContainerengineClusterEndpointConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#endpoint_config ContainerengineCluster#endpoint_config}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_policy_config`<sup>Optional</sup> <a name="image_policy_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.imagePolicyConfig"></a>

```python
image_policy_config: ContainerengineClusterImagePolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

image_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#image_policy_config ContainerengineCluster#image_policy_config}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.options"></a>

```python
options: ContainerengineClusterOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#options ContainerengineCluster#options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.timeouts"></a>

```python
timeouts: ContainerengineClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#timeouts ContainerengineCluster#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}.

---

### ContainerengineClusterEndpointConfig <a name="ContainerengineClusterEndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterEndpointConfig(
  subnet_id: str,
  is_public_ip_enabled: typing.Union[bool, IResolvable] = None,
  nsg_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.isPublicIpEnabled">is_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}.

---

##### `is_public_ip_enabled`<sup>Optional</sup> <a name="is_public_ip_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.isPublicIpEnabled"></a>

```python
is_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}.

---

### ContainerengineClusterEndpoints <a name="ContainerengineClusterEndpoints" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterEndpoints()
```


### ContainerengineClusterImagePolicyConfig <a name="ContainerengineClusterImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterImagePolicyConfig(
  is_policy_enabled: typing.Union[bool, IResolvable] = None,
  key_details: typing.Union[IResolvable, typing.List[ContainerengineClusterImagePolicyConfigKeyDetails]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.isPolicyEnabled">is_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.keyDetails">key_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]</code> | key_details block. |

---

##### `is_policy_enabled`<sup>Optional</sup> <a name="is_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.isPolicyEnabled"></a>

```python
is_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}.

---

##### `key_details`<sup>Optional</sup> <a name="key_details" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.keyDetails"></a>

```python
key_details: typing.Union[IResolvable, typing.List[ContainerengineClusterImagePolicyConfigKeyDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]

key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key_details ContainerengineCluster#key_details}

---

### ContainerengineClusterImagePolicyConfigKeyDetails <a name="ContainerengineClusterImagePolicyConfigKeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails(
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}.

---

### ContainerengineClusterMetadata <a name="ContainerengineClusterMetadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterMetadata()
```


### ContainerengineClusterOptions <a name="ContainerengineClusterOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptions(
  add_ons: ContainerengineClusterOptionsAddOns = None,
  admission_controller_options: ContainerengineClusterOptionsAdmissionControllerOptions = None,
  kubernetes_network_config: ContainerengineClusterOptionsKubernetesNetworkConfig = None,
  open_id_connect_discovery: ContainerengineClusterOptionsOpenIdConnectDiscovery = None,
  open_id_connect_token_authentication_config: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig = None,
  persistent_volume_config: ContainerengineClusterOptionsPersistentVolumeConfig = None,
  service_lb_config: ContainerengineClusterOptionsServiceLbConfig = None,
  service_lb_subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.addOns">add_ons</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | add_ons block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.admissionControllerOptions">admission_controller_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | admission_controller_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.kubernetesNetworkConfig">kubernetes_network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | kubernetes_network_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectDiscovery">open_id_connect_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | open_id_connect_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectTokenAuthenticationConfig">open_id_connect_token_authentication_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | open_id_connect_token_authentication_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.persistentVolumeConfig">persistent_volume_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | persistent_volume_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbConfig">service_lb_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | service_lb_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbSubnetIds">service_lb_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}. |

---

##### `add_ons`<sup>Optional</sup> <a name="add_ons" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.addOns"></a>

```python
add_ons: ContainerengineClusterOptionsAddOns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

add_ons block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#add_ons ContainerengineCluster#add_ons}

---

##### `admission_controller_options`<sup>Optional</sup> <a name="admission_controller_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.admissionControllerOptions"></a>

```python
admission_controller_options: ContainerengineClusterOptionsAdmissionControllerOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

admission_controller_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#admission_controller_options ContainerengineCluster#admission_controller_options}

---

##### `kubernetes_network_config`<sup>Optional</sup> <a name="kubernetes_network_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.kubernetesNetworkConfig"></a>

```python
kubernetes_network_config: ContainerengineClusterOptionsKubernetesNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

kubernetes_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_network_config ContainerengineCluster#kubernetes_network_config}

---

##### `open_id_connect_discovery`<sup>Optional</sup> <a name="open_id_connect_discovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectDiscovery"></a>

```python
open_id_connect_discovery: ContainerengineClusterOptionsOpenIdConnectDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

open_id_connect_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_discovery ContainerengineCluster#open_id_connect_discovery}

---

##### `open_id_connect_token_authentication_config`<sup>Optional</sup> <a name="open_id_connect_token_authentication_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectTokenAuthenticationConfig"></a>

```python
open_id_connect_token_authentication_config: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

open_id_connect_token_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_token_authentication_config ContainerengineCluster#open_id_connect_token_authentication_config}

---

##### `persistent_volume_config`<sup>Optional</sup> <a name="persistent_volume_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.persistentVolumeConfig"></a>

```python
persistent_volume_config: ContainerengineClusterOptionsPersistentVolumeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

persistent_volume_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#persistent_volume_config ContainerengineCluster#persistent_volume_config}

---

##### `service_lb_config`<sup>Optional</sup> <a name="service_lb_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbConfig"></a>

```python
service_lb_config: ContainerengineClusterOptionsServiceLbConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

service_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_config ContainerengineCluster#service_lb_config}

---

##### `service_lb_subnet_ids`<sup>Optional</sup> <a name="service_lb_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbSubnetIds"></a>

```python
service_lb_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}.

---

### ContainerengineClusterOptionsAddOns <a name="ContainerengineClusterOptionsAddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsAddOns(
  is_kubernetes_dashboard_enabled: typing.Union[bool, IResolvable] = None,
  is_tiller_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isKubernetesDashboardEnabled">is_kubernetes_dashboard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isTillerEnabled">is_tiller_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}. |

---

##### `is_kubernetes_dashboard_enabled`<sup>Optional</sup> <a name="is_kubernetes_dashboard_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isKubernetesDashboardEnabled"></a>

```python
is_kubernetes_dashboard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}.

---

##### `is_tiller_enabled`<sup>Optional</sup> <a name="is_tiller_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isTillerEnabled"></a>

```python
is_tiller_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}.

---

### ContainerengineClusterOptionsAdmissionControllerOptions <a name="ContainerengineClusterOptionsAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions(
  is_pod_security_policy_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.property.isPodSecurityPolicyEnabled">is_pod_security_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}. |

---

##### `is_pod_security_policy_enabled`<sup>Optional</sup> <a name="is_pod_security_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.property.isPodSecurityPolicyEnabled"></a>

```python
is_pod_security_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}.

---

### ContainerengineClusterOptionsKubernetesNetworkConfig <a name="ContainerengineClusterOptionsKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig(
  pods_cidr: str = None,
  services_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.podsCidr">pods_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.servicesCidr">services_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}. |

---

##### `pods_cidr`<sup>Optional</sup> <a name="pods_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.podsCidr"></a>

```python
pods_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}.

---

##### `services_cidr`<sup>Optional</sup> <a name="services_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.servicesCidr"></a>

```python
services_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}.

---

### ContainerengineClusterOptionsOpenIdConnectDiscovery <a name="ContainerengineClusterOptionsOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery(
  is_open_id_connect_discovery_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.property.isOpenIdConnectDiscoveryEnabled">is_open_id_connect_discovery_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}. |

---

##### `is_open_id_connect_discovery_enabled`<sup>Optional</sup> <a name="is_open_id_connect_discovery_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.property.isOpenIdConnectDiscoveryEnabled"></a>

```python
is_open_id_connect_discovery_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}.

---

### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig(
  is_open_id_connect_auth_enabled: typing.Union[bool, IResolvable],
  ca_certificate: str = None,
  client_id: str = None,
  groups_claim: str = None,
  groups_prefix: str = None,
  issuer_url: str = None,
  required_claims: typing.Union[IResolvable, typing.List[ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims]] = None,
  signing_algorithms: typing.List[str] = None,
  username_claim: str = None,
  username_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.isOpenIdConnectAuthEnabled">is_open_id_connect_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsClaim">groups_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsPrefix">groups_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.issuerUrl">issuer_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.requiredClaims">required_claims</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]</code> | required_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.signingAlgorithms">signing_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernameClaim">username_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernamePrefix">username_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}. |

---

##### `is_open_id_connect_auth_enabled`<sup>Required</sup> <a name="is_open_id_connect_auth_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.isOpenIdConnectAuthEnabled"></a>

```python
is_open_id_connect_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}.

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}.

---

##### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}.

---

##### `groups_prefix`<sup>Optional</sup> <a name="groups_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsPrefix"></a>

```python
groups_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}.

---

##### `issuer_url`<sup>Optional</sup> <a name="issuer_url" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}.

---

##### `required_claims`<sup>Optional</sup> <a name="required_claims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.requiredClaims"></a>

```python
required_claims: typing.Union[IResolvable, typing.List[ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]

required_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#required_claims ContainerengineCluster#required_claims}

---

##### `signing_algorithms`<sup>Optional</sup> <a name="signing_algorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.signingAlgorithms"></a>

```python
signing_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}.

---

##### `username_claim`<sup>Optional</sup> <a name="username_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernameClaim"></a>

```python
username_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}.

---

##### `username_prefix`<sup>Optional</sup> <a name="username_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernamePrefix"></a>

```python
username_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}.

---

### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key ContainerengineCluster#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#value ContainerengineCluster#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key ContainerengineCluster#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#value ContainerengineCluster#value}.

---

### ContainerengineClusterOptionsPersistentVolumeConfig <a name="ContainerengineClusterOptionsPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

### ContainerengineClusterOptionsServiceLbConfig <a name="ContainerengineClusterOptionsServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsServiceLbConfig(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

### ContainerengineClusterTimeouts <a name="ContainerengineClusterTimeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineClusterClusterPodNetworkOptionsList <a name="ContainerengineClusterClusterPodNetworkOptionsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineClusterClusterPodNetworkOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineClusterClusterPodNetworkOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]]

---


### ContainerengineClusterClusterPodNetworkOptionsOutputReference <a name="ContainerengineClusterClusterPodNetworkOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniTypeInput">cni_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType">cni_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cni_type_input`<sup>Optional</sup> <a name="cni_type_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniTypeInput"></a>

```python
cni_type_input: str
```

- *Type:* str

---

##### `cni_type`<sup>Required</sup> <a name="cni_type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType"></a>

```python
cni_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineClusterClusterPodNetworkOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>]

---


### ContainerengineClusterEndpointConfigOutputReference <a name="ContainerengineClusterEndpointConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetIsPublicIpEnabled">reset_is_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_public_ip_enabled` <a name="reset_is_public_ip_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetIsPublicIpEnabled"></a>

```python
def reset_is_public_ip_enabled() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabledInput">is_public_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled">is_public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_public_ip_enabled_input`<sup>Optional</sup> <a name="is_public_ip_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabledInput"></a>

```python
is_public_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `is_public_ip_enabled`<sup>Required</sup> <a name="is_public_ip_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled"></a>

```python
is_public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterEndpointConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---


### ContainerengineClusterEndpointsList <a name="ContainerengineClusterEndpointsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerengineClusterEndpointsOutputReference <a name="ContainerengineClusterEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.kubernetes">kubernetes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint">vcn_hostname_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints">ContainerengineClusterEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.kubernetes"></a>

```python
kubernetes: str
```

- *Type:* str

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

##### `vcn_hostname_endpoint`<sup>Required</sup> <a name="vcn_hostname_endpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint"></a>

```python
vcn_hostname_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints">ContainerengineClusterEndpoints</a>

---


### ContainerengineClusterImagePolicyConfigKeyDetailsList <a name="ContainerengineClusterImagePolicyConfigKeyDetailsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineClusterImagePolicyConfigKeyDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]

---


### ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference <a name="ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineClusterImagePolicyConfigKeyDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]

---


### ContainerengineClusterImagePolicyConfigOutputReference <a name="ContainerengineClusterImagePolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails">put_key_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetIsPolicyEnabled">reset_is_policy_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetKeyDetails">reset_key_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_details` <a name="put_key_details" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails"></a>

```python
def put_key_details(
  value: typing.Union[IResolvable, typing.List[ContainerengineClusterImagePolicyConfigKeyDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]

---

##### `reset_is_policy_enabled` <a name="reset_is_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetIsPolicyEnabled"></a>

```python
def reset_is_policy_enabled() -> None
```

##### `reset_key_details` <a name="reset_key_details" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetKeyDetails"></a>

```python
def reset_key_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails">key_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList">ContainerengineClusterImagePolicyConfigKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabledInput">is_policy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetailsInput">key_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled">is_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_details`<sup>Required</sup> <a name="key_details" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails"></a>

```python
key_details: ContainerengineClusterImagePolicyConfigKeyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList">ContainerengineClusterImagePolicyConfigKeyDetailsList</a>

---

##### `is_policy_enabled_input`<sup>Optional</sup> <a name="is_policy_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabledInput"></a>

```python
is_policy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_details_input`<sup>Optional</sup> <a name="key_details_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetailsInput"></a>

```python
key_details_input: typing.Union[IResolvable, typing.List[ContainerengineClusterImagePolicyConfigKeyDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>]]

---

##### `is_policy_enabled`<sup>Required</sup> <a name="is_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled"></a>

```python
is_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterImagePolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---


### ContainerengineClusterMetadataList <a name="ContainerengineClusterMetadataList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineClusterMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerengineClusterMetadataOutputReference <a name="ContainerengineClusterMetadataOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByUserId">created_by_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId">created_by_work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByUserId">deleted_by_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId">deleted_by_work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration">time_credential_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeDeleted">time_deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByUserId">updated_by_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId">updated_by_work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata">ContainerengineClusterMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by_user_id`<sup>Required</sup> <a name="created_by_user_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByUserId"></a>

```python
created_by_user_id: str
```

- *Type:* str

---

##### `created_by_work_request_id`<sup>Required</sup> <a name="created_by_work_request_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId"></a>

```python
created_by_work_request_id: str
```

- *Type:* str

---

##### `deleted_by_user_id`<sup>Required</sup> <a name="deleted_by_user_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByUserId"></a>

```python
deleted_by_user_id: str
```

- *Type:* str

---

##### `deleted_by_work_request_id`<sup>Required</sup> <a name="deleted_by_work_request_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId"></a>

```python
deleted_by_work_request_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_credential_expiration`<sup>Required</sup> <a name="time_credential_expiration" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration"></a>

```python
time_credential_expiration: str
```

- *Type:* str

---

##### `time_deleted`<sup>Required</sup> <a name="time_deleted" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeDeleted"></a>

```python
time_deleted: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by_user_id`<sup>Required</sup> <a name="updated_by_user_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByUserId"></a>

```python
updated_by_user_id: str
```

- *Type:* str

---

##### `updated_by_work_request_id`<sup>Required</sup> <a name="updated_by_work_request_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId"></a>

```python
updated_by_work_request_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata">ContainerengineClusterMetadata</a>

---


### ContainerengineClusterOptionsAddOnsOutputReference <a name="ContainerengineClusterOptionsAddOnsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsKubernetesDashboardEnabled">reset_is_kubernetes_dashboard_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsTillerEnabled">reset_is_tiller_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_kubernetes_dashboard_enabled` <a name="reset_is_kubernetes_dashboard_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsKubernetesDashboardEnabled"></a>

```python
def reset_is_kubernetes_dashboard_enabled() -> None
```

##### `reset_is_tiller_enabled` <a name="reset_is_tiller_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsTillerEnabled"></a>

```python
def reset_is_tiller_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabledInput">is_kubernetes_dashboard_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabledInput">is_tiller_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled">is_kubernetes_dashboard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled">is_tiller_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_kubernetes_dashboard_enabled_input`<sup>Optional</sup> <a name="is_kubernetes_dashboard_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabledInput"></a>

```python
is_kubernetes_dashboard_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_tiller_enabled_input`<sup>Optional</sup> <a name="is_tiller_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabledInput"></a>

```python
is_tiller_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_kubernetes_dashboard_enabled`<sup>Required</sup> <a name="is_kubernetes_dashboard_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled"></a>

```python
is_kubernetes_dashboard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_tiller_enabled`<sup>Required</sup> <a name="is_tiller_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled"></a>

```python
is_tiller_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptionsAddOns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---


### ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference <a name="ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resetIsPodSecurityPolicyEnabled">reset_is_pod_security_policy_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_pod_security_policy_enabled` <a name="reset_is_pod_security_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resetIsPodSecurityPolicyEnabled"></a>

```python
def reset_is_pod_security_policy_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabledInput">is_pod_security_policy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled">is_pod_security_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_pod_security_policy_enabled_input`<sup>Optional</sup> <a name="is_pod_security_policy_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabledInput"></a>

```python
is_pod_security_policy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_pod_security_policy_enabled`<sup>Required</sup> <a name="is_pod_security_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled"></a>

```python
is_pod_security_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptionsAdmissionControllerOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---


### ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference <a name="ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetPodsCidr">reset_pods_cidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetServicesCidr">reset_services_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pods_cidr` <a name="reset_pods_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetPodsCidr"></a>

```python
def reset_pods_cidr() -> None
```

##### `reset_services_cidr` <a name="reset_services_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetServicesCidr"></a>

```python
def reset_services_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidrInput">pods_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidrInput">services_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr">pods_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr">services_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pods_cidr_input`<sup>Optional</sup> <a name="pods_cidr_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidrInput"></a>

```python
pods_cidr_input: str
```

- *Type:* str

---

##### `services_cidr_input`<sup>Optional</sup> <a name="services_cidr_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidrInput"></a>

```python
services_cidr_input: str
```

- *Type:* str

---

##### `pods_cidr`<sup>Required</sup> <a name="pods_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr"></a>

```python
pods_cidr: str
```

- *Type:* str

---

##### `services_cidr`<sup>Required</sup> <a name="services_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr"></a>

```python
services_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptionsKubernetesNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---


### ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resetIsOpenIdConnectDiscoveryEnabled">reset_is_open_id_connect_discovery_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_open_id_connect_discovery_enabled` <a name="reset_is_open_id_connect_discovery_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resetIsOpenIdConnectDiscoveryEnabled"></a>

```python
def reset_is_open_id_connect_discovery_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabledInput">is_open_id_connect_discovery_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled">is_open_id_connect_discovery_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_open_id_connect_discovery_enabled_input`<sup>Optional</sup> <a name="is_open_id_connect_discovery_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabledInput"></a>

```python
is_open_id_connect_discovery_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_open_id_connect_discovery_enabled`<sup>Required</sup> <a name="is_open_id_connect_discovery_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled"></a>

```python
is_open_id_connect_discovery_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptionsOpenIdConnectDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims">put_required_claims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsClaim">reset_groups_claim</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsPrefix">reset_groups_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetIssuerUrl">reset_issuer_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetRequiredClaims">reset_required_claims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetSigningAlgorithms">reset_signing_algorithms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernameClaim">reset_username_claim</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernamePrefix">reset_username_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required_claims` <a name="put_required_claims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims"></a>

```python
def put_required_claims(
  value: typing.Union[IResolvable, typing.List[ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]

---

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_groups_claim` <a name="reset_groups_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsClaim"></a>

```python
def reset_groups_claim() -> None
```

##### `reset_groups_prefix` <a name="reset_groups_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsPrefix"></a>

```python
def reset_groups_prefix() -> None
```

##### `reset_issuer_url` <a name="reset_issuer_url" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetIssuerUrl"></a>

```python
def reset_issuer_url() -> None
```

##### `reset_required_claims` <a name="reset_required_claims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetRequiredClaims"></a>

```python
def reset_required_claims() -> None
```

##### `reset_signing_algorithms` <a name="reset_signing_algorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetSigningAlgorithms"></a>

```python
def reset_signing_algorithms() -> None
```

##### `reset_username_claim` <a name="reset_username_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernameClaim"></a>

```python
def reset_username_claim() -> None
```

##### `reset_username_prefix` <a name="reset_username_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernamePrefix"></a>

```python
def reset_username_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims">required_claims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaimInput">groups_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefixInput">groups_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabledInput">is_open_id_connect_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaimsInput">required_claims_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithmsInput">signing_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaimInput">username_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefixInput">username_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim">groups_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix">groups_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled">is_open_id_connect_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms">signing_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim">username_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix">username_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required_claims`<sup>Required</sup> <a name="required_claims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims"></a>

```python
required_claims: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a>

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `groups_claim_input`<sup>Optional</sup> <a name="groups_claim_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaimInput"></a>

```python
groups_claim_input: str
```

- *Type:* str

---

##### `groups_prefix_input`<sup>Optional</sup> <a name="groups_prefix_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefixInput"></a>

```python
groups_prefix_input: str
```

- *Type:* str

---

##### `is_open_id_connect_auth_enabled_input`<sup>Optional</sup> <a name="is_open_id_connect_auth_enabled_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabledInput"></a>

```python
is_open_id_connect_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `required_claims_input`<sup>Optional</sup> <a name="required_claims_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaimsInput"></a>

```python
required_claims_input: typing.Union[IResolvable, typing.List[ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]

---

##### `signing_algorithms_input`<sup>Optional</sup> <a name="signing_algorithms_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithmsInput"></a>

```python
signing_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username_claim_input`<sup>Optional</sup> <a name="username_claim_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaimInput"></a>

```python
username_claim_input: str
```

- *Type:* str

---

##### `username_prefix_input`<sup>Optional</sup> <a name="username_prefix_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefixInput"></a>

```python
username_prefix_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `groups_claim`<sup>Required</sup> <a name="groups_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

---

##### `groups_prefix`<sup>Required</sup> <a name="groups_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix"></a>

```python
groups_prefix: str
```

- *Type:* str

---

##### `is_open_id_connect_auth_enabled`<sup>Required</sup> <a name="is_open_id_connect_auth_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled"></a>

```python
is_open_id_connect_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `signing_algorithms`<sup>Required</sup> <a name="signing_algorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms"></a>

```python
signing_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username_claim`<sup>Required</sup> <a name="username_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim"></a>

```python
username_claim: str
```

- *Type:* str

---

##### `username_prefix`<sup>Required</sup> <a name="username_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix"></a>

```python
username_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]

---


### ContainerengineClusterOptionsOutputReference <a name="ContainerengineClusterOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns">put_add_ons</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions">put_admission_controller_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig">put_kubernetes_network_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery">put_open_id_connect_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig">put_open_id_connect_token_authentication_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig">put_persistent_volume_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig">put_service_lb_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAddOns">reset_add_ons</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAdmissionControllerOptions">reset_admission_controller_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetKubernetesNetworkConfig">reset_kubernetes_network_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectDiscovery">reset_open_id_connect_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectTokenAuthenticationConfig">reset_open_id_connect_token_authentication_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetPersistentVolumeConfig">reset_persistent_volume_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbConfig">reset_service_lb_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbSubnetIds">reset_service_lb_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_add_ons` <a name="put_add_ons" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns"></a>

```python
def put_add_ons(
  is_kubernetes_dashboard_enabled: typing.Union[bool, IResolvable] = None,
  is_tiller_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_kubernetes_dashboard_enabled`<sup>Optional</sup> <a name="is_kubernetes_dashboard_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns.parameter.isKubernetesDashboardEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}.

---

###### `is_tiller_enabled`<sup>Optional</sup> <a name="is_tiller_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns.parameter.isTillerEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}.

---

##### `put_admission_controller_options` <a name="put_admission_controller_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions"></a>

```python
def put_admission_controller_options(
  is_pod_security_policy_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_pod_security_policy_enabled`<sup>Optional</sup> <a name="is_pod_security_policy_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions.parameter.isPodSecurityPolicyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}.

---

##### `put_kubernetes_network_config` <a name="put_kubernetes_network_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig"></a>

```python
def put_kubernetes_network_config(
  pods_cidr: str = None,
  services_cidr: str = None
) -> None
```

###### `pods_cidr`<sup>Optional</sup> <a name="pods_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig.parameter.podsCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}.

---

###### `services_cidr`<sup>Optional</sup> <a name="services_cidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig.parameter.servicesCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}.

---

##### `put_open_id_connect_discovery` <a name="put_open_id_connect_discovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery"></a>

```python
def put_open_id_connect_discovery(
  is_open_id_connect_discovery_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_open_id_connect_discovery_enabled`<sup>Optional</sup> <a name="is_open_id_connect_discovery_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery.parameter.isOpenIdConnectDiscoveryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}.

---

##### `put_open_id_connect_token_authentication_config` <a name="put_open_id_connect_token_authentication_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig"></a>

```python
def put_open_id_connect_token_authentication_config(
  is_open_id_connect_auth_enabled: typing.Union[bool, IResolvable],
  ca_certificate: str = None,
  client_id: str = None,
  groups_claim: str = None,
  groups_prefix: str = None,
  issuer_url: str = None,
  required_claims: typing.Union[IResolvable, typing.List[ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims]] = None,
  signing_algorithms: typing.List[str] = None,
  username_claim: str = None,
  username_prefix: str = None
) -> None
```

###### `is_open_id_connect_auth_enabled`<sup>Required</sup> <a name="is_open_id_connect_auth_enabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.isOpenIdConnectAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}.

---

###### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.caCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}.

---

###### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.groupsClaim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}.

---

###### `groups_prefix`<sup>Optional</sup> <a name="groups_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.groupsPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}.

---

###### `issuer_url`<sup>Optional</sup> <a name="issuer_url" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.issuerUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}.

---

###### `required_claims`<sup>Optional</sup> <a name="required_claims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.requiredClaims"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>]]

required_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#required_claims ContainerengineCluster#required_claims}

---

###### `signing_algorithms`<sup>Optional</sup> <a name="signing_algorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.signingAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}.

---

###### `username_claim`<sup>Optional</sup> <a name="username_claim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.usernameClaim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}.

---

###### `username_prefix`<sup>Optional</sup> <a name="username_prefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.usernamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}.

---

##### `put_persistent_volume_config` <a name="put_persistent_volume_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig"></a>

```python
def put_persistent_volume_config(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None
) -> None
```

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

##### `put_service_lb_config` <a name="put_service_lb_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig"></a>

```python
def put_service_lb_config(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None
) -> None
```

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

##### `reset_add_ons` <a name="reset_add_ons" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAddOns"></a>

```python
def reset_add_ons() -> None
```

##### `reset_admission_controller_options` <a name="reset_admission_controller_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAdmissionControllerOptions"></a>

```python
def reset_admission_controller_options() -> None
```

##### `reset_kubernetes_network_config` <a name="reset_kubernetes_network_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetKubernetesNetworkConfig"></a>

```python
def reset_kubernetes_network_config() -> None
```

##### `reset_open_id_connect_discovery` <a name="reset_open_id_connect_discovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectDiscovery"></a>

```python
def reset_open_id_connect_discovery() -> None
```

##### `reset_open_id_connect_token_authentication_config` <a name="reset_open_id_connect_token_authentication_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectTokenAuthenticationConfig"></a>

```python
def reset_open_id_connect_token_authentication_config() -> None
```

##### `reset_persistent_volume_config` <a name="reset_persistent_volume_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetPersistentVolumeConfig"></a>

```python
def reset_persistent_volume_config() -> None
```

##### `reset_service_lb_config` <a name="reset_service_lb_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbConfig"></a>

```python
def reset_service_lb_config() -> None
```

##### `reset_service_lb_subnet_ids` <a name="reset_service_lb_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbSubnetIds"></a>

```python
def reset_service_lb_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOns">add_ons</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference">ContainerengineClusterOptionsAddOnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptions">admission_controller_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference">ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig">kubernetes_network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference">ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery">open_id_connect_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference">ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig">open_id_connect_token_authentication_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig">persistent_volume_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference">ContainerengineClusterOptionsPersistentVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfig">service_lb_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference">ContainerengineClusterOptionsServiceLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOnsInput">add_ons_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptionsInput">admission_controller_options_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfigInput">kubernetes_network_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscoveryInput">open_id_connect_discovery_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfigInput">open_id_connect_token_authentication_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfigInput">persistent_volume_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfigInput">service_lb_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIdsInput">service_lb_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds">service_lb_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_ons`<sup>Required</sup> <a name="add_ons" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOns"></a>

```python
add_ons: ContainerengineClusterOptionsAddOnsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference">ContainerengineClusterOptionsAddOnsOutputReference</a>

---

##### `admission_controller_options`<sup>Required</sup> <a name="admission_controller_options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptions"></a>

```python
admission_controller_options: ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference">ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference</a>

---

##### `kubernetes_network_config`<sup>Required</sup> <a name="kubernetes_network_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig"></a>

```python
kubernetes_network_config: ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference">ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference</a>

---

##### `open_id_connect_discovery`<sup>Required</sup> <a name="open_id_connect_discovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery"></a>

```python
open_id_connect_discovery: ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference">ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference</a>

---

##### `open_id_connect_token_authentication_config`<sup>Required</sup> <a name="open_id_connect_token_authentication_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig"></a>

```python
open_id_connect_token_authentication_config: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference</a>

---

##### `persistent_volume_config`<sup>Required</sup> <a name="persistent_volume_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig"></a>

```python
persistent_volume_config: ContainerengineClusterOptionsPersistentVolumeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference">ContainerengineClusterOptionsPersistentVolumeConfigOutputReference</a>

---

##### `service_lb_config`<sup>Required</sup> <a name="service_lb_config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfig"></a>

```python
service_lb_config: ContainerengineClusterOptionsServiceLbConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference">ContainerengineClusterOptionsServiceLbConfigOutputReference</a>

---

##### `add_ons_input`<sup>Optional</sup> <a name="add_ons_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOnsInput"></a>

```python
add_ons_input: ContainerengineClusterOptionsAddOns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---

##### `admission_controller_options_input`<sup>Optional</sup> <a name="admission_controller_options_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptionsInput"></a>

```python
admission_controller_options_input: ContainerengineClusterOptionsAdmissionControllerOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---

##### `kubernetes_network_config_input`<sup>Optional</sup> <a name="kubernetes_network_config_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfigInput"></a>

```python
kubernetes_network_config_input: ContainerengineClusterOptionsKubernetesNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---

##### `open_id_connect_discovery_input`<sup>Optional</sup> <a name="open_id_connect_discovery_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscoveryInput"></a>

```python
open_id_connect_discovery_input: ContainerengineClusterOptionsOpenIdConnectDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---

##### `open_id_connect_token_authentication_config_input`<sup>Optional</sup> <a name="open_id_connect_token_authentication_config_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfigInput"></a>

```python
open_id_connect_token_authentication_config_input: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---

##### `persistent_volume_config_input`<sup>Optional</sup> <a name="persistent_volume_config_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfigInput"></a>

```python
persistent_volume_config_input: ContainerengineClusterOptionsPersistentVolumeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---

##### `service_lb_config_input`<sup>Optional</sup> <a name="service_lb_config_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfigInput"></a>

```python
service_lb_config_input: ContainerengineClusterOptionsServiceLbConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---

##### `service_lb_subnet_ids_input`<sup>Optional</sup> <a name="service_lb_subnet_ids_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIdsInput"></a>

```python
service_lb_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_lb_subnet_ids`<sup>Required</sup> <a name="service_lb_subnet_ids" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds"></a>

```python
service_lb_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---


### ContainerengineClusterOptionsPersistentVolumeConfigOutputReference <a name="ContainerengineClusterOptionsPersistentVolumeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptionsPersistentVolumeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---


### ContainerengineClusterOptionsServiceLbConfigOutputReference <a name="ContainerengineClusterOptionsServiceLbConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineClusterOptionsServiceLbConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---


### ContainerengineClusterTimeoutsOutputReference <a name="ContainerengineClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_cluster

containerengineCluster.ContainerengineClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>]

---



