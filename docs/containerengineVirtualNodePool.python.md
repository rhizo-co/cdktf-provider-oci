# `containerengineVirtualNodePool` Submodule <a name="`containerengineVirtualNodePool` Submodule" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineVirtualNodePool <a name="ContainerengineVirtualNodePool" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool oci_containerengine_virtual_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePool(
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
  display_name: str,
  placement_configurations: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolPlacementConfigurations]],
  pod_configuration: ContainerengineVirtualNodePoolPodConfiguration,
  size: typing.Union[int, float],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  initial_virtual_node_labels: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolInitialVirtualNodeLabels]] = None,
  nsg_ids: typing.List[str] = None,
  taints: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolTaints]] = None,
  timeouts: ContainerengineVirtualNodePoolTimeouts = None,
  virtual_node_tags: ContainerengineVirtualNodePoolVirtualNodeTags = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.placementConfigurations">placement_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]</code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.podConfiguration">pod_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | pod_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.initialVirtualNodeLabels">initial_virtual_node_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]</code> | initial_virtual_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]</code> | taints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.virtualNodeTags">virtual_node_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | virtual_node_tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}.

---

##### `placement_configurations`<sup>Required</sup> <a name="placement_configurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.placementConfigurations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#placement_configurations ContainerengineVirtualNodePool#placement_configurations}

---

##### `pod_configuration`<sup>Required</sup> <a name="pod_configuration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.podConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

pod_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#pod_configuration ContainerengineVirtualNodePool#pod_configuration}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_virtual_node_labels`<sup>Optional</sup> <a name="initial_virtual_node_labels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.initialVirtualNodeLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]

initial_virtual_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#initial_virtual_node_labels ContainerengineVirtualNodePool#initial_virtual_node_labels}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#taints ContainerengineVirtualNodePool#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#timeouts ContainerengineVirtualNodePool#timeouts}

---

##### `virtual_node_tags`<sup>Optional</sup> <a name="virtual_node_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.virtualNodeTags"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

virtual_node_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#virtual_node_tags ContainerengineVirtualNodePool#virtual_node_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels">put_initial_virtual_node_labels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations">put_placement_configurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration">put_pod_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags">put_virtual_node_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels">reset_initial_virtual_node_labels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints">reset_taints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags">reset_virtual_node_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_initial_virtual_node_labels` <a name="put_initial_virtual_node_labels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels"></a>

```python
def put_initial_virtual_node_labels(
  value: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolInitialVirtualNodeLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]

---

##### `put_placement_configurations` <a name="put_placement_configurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations"></a>

```python
def put_placement_configurations(
  value: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolPlacementConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]

---

##### `put_pod_configuration` <a name="put_pod_configuration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration"></a>

```python
def put_pod_configuration(
  shape: str,
  subnet_id: str,
  nsg_ids: typing.List[str] = None
) -> None
```

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

##### `put_taints` <a name="put_taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolTaints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}.

---

##### `put_virtual_node_tags` <a name="put_virtual_node_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags"></a>

```python
def put_virtual_node_tags(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None
) -> None
```

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_virtual_node_labels` <a name="reset_initial_virtual_node_labels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels"></a>

```python
def reset_initial_virtual_node_labels() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_taints` <a name="reset_taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints"></a>

```python
def reset_taints() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_node_tags` <a name="reset_virtual_node_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags"></a>

```python
def reset_virtual_node_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerengineVirtualNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerengineVirtualNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineVirtualNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels">initial_virtual_node_labels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations">placement_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration">pod_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints">taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags">virtual_node_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput">initial_virtual_node_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput">placement_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput">pod_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput">virtual_node_tags_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `initial_virtual_node_labels`<sup>Required</sup> <a name="initial_virtual_node_labels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels"></a>

```python
initial_virtual_node_labels: ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a>

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `placement_configurations`<sup>Required</sup> <a name="placement_configurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations"></a>

```python
placement_configurations: ContainerengineVirtualNodePoolPlacementConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a>

---

##### `pod_configuration`<sup>Required</sup> <a name="pod_configuration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration"></a>

```python
pod_configuration: ContainerengineVirtualNodePoolPodConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `taints`<sup>Required</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints"></a>

```python
taints: ContainerengineVirtualNodePoolTaintsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts"></a>

```python
timeouts: ContainerengineVirtualNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `virtual_node_tags`<sup>Required</sup> <a name="virtual_node_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags"></a>

```python
virtual_node_tags: ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_virtual_node_labels_input`<sup>Optional</sup> <a name="initial_virtual_node_labels_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput"></a>

```python
initial_virtual_node_labels_input: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolInitialVirtualNodeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `placement_configurations_input`<sup>Optional</sup> <a name="placement_configurations_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput"></a>

```python
placement_configurations_input: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolPlacementConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]

---

##### `pod_configuration_input`<sup>Optional</sup> <a name="pod_configuration_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput"></a>

```python
pod_configuration_input: ContainerengineVirtualNodePoolPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerengineVirtualNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>]

---

##### `virtual_node_tags_input`<sup>Optional</sup> <a name="virtual_node_tags_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput"></a>

```python
virtual_node_tags_input: ContainerengineVirtualNodePoolVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineVirtualNodePoolConfig <a name="ContainerengineVirtualNodePoolConfig" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  compartment_id: str,
  display_name: str,
  placement_configurations: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolPlacementConfigurations]],
  pod_configuration: ContainerengineVirtualNodePoolPodConfiguration,
  size: typing.Union[int, float],
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  initial_virtual_node_labels: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolInitialVirtualNodeLabels]] = None,
  nsg_ids: typing.List[str] = None,
  taints: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolTaints]] = None,
  timeouts: ContainerengineVirtualNodePoolTimeouts = None,
  virtual_node_tags: ContainerengineVirtualNodePoolVirtualNodeTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations">placement_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]</code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration">pod_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | pod_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels">initial_virtual_node_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]</code> | initial_virtual_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]</code> | taints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags">virtual_node_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | virtual_node_tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}.

---

##### `placement_configurations`<sup>Required</sup> <a name="placement_configurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations"></a>

```python
placement_configurations: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolPlacementConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#placement_configurations ContainerengineVirtualNodePool#placement_configurations}

---

##### `pod_configuration`<sup>Required</sup> <a name="pod_configuration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration"></a>

```python
pod_configuration: ContainerengineVirtualNodePoolPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

pod_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#pod_configuration ContainerengineVirtualNodePool#pod_configuration}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_virtual_node_labels`<sup>Optional</sup> <a name="initial_virtual_node_labels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels"></a>

```python
initial_virtual_node_labels: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolInitialVirtualNodeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]

initial_virtual_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#initial_virtual_node_labels ContainerengineVirtualNodePool#initial_virtual_node_labels}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#taints ContainerengineVirtualNodePool#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts"></a>

```python
timeouts: ContainerengineVirtualNodePoolTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#timeouts ContainerengineVirtualNodePool#timeouts}

---

##### `virtual_node_tags`<sup>Optional</sup> <a name="virtual_node_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags"></a>

```python
virtual_node_tags: ContainerengineVirtualNodePoolVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

virtual_node_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#virtual_node_tags ContainerengineVirtualNodePool#virtual_node_tags}

---

### ContainerengineVirtualNodePoolInitialVirtualNodeLabels <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolPlacementConfigurations <a name="ContainerengineVirtualNodePoolPlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations(
  availability_domain: str,
  fault_domain: typing.List[str],
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain">fault_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}.

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain"></a>

```python
fault_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

### ContainerengineVirtualNodePoolPodConfiguration <a name="ContainerengineVirtualNodePoolPodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration(
  shape: str,
  subnet_id: str,
  nsg_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

### ContainerengineVirtualNodePoolTaints <a name="ContainerengineVirtualNodePoolTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints(
  effect: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolTimeouts <a name="ContainerengineVirtualNodePoolTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}.

---

### ContainerengineVirtualNodePoolVirtualNodeTags <a name="ContainerengineVirtualNodePoolVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags(
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolInitialVirtualNodeLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]]

---


### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineVirtualNodePoolInitialVirtualNodeLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>]

---


### ContainerengineVirtualNodePoolPlacementConfigurationsList <a name="ContainerengineVirtualNodePoolPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolPlacementConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]]

---


### ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference <a name="ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput">fault_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain">fault_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `fault_domain_input`<sup>Optional</sup> <a name="fault_domain_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput"></a>

```python
fault_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain"></a>

```python
fault_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineVirtualNodePoolPlacementConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>]

---


### ContainerengineVirtualNodePoolPodConfigurationOutputReference <a name="ContainerengineVirtualNodePoolPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineVirtualNodePoolPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---


### ContainerengineVirtualNodePoolTaintsList <a name="ContainerengineVirtualNodePoolTaintsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerengineVirtualNodePoolTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerengineVirtualNodePoolTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]]

---


### ContainerengineVirtualNodePoolTaintsOutputReference <a name="ContainerengineVirtualNodePoolTaintsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineVirtualNodePoolTaints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>]

---


### ContainerengineVirtualNodePoolTimeoutsOutputReference <a name="ContainerengineVirtualNodePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerengineVirtualNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>]

---


### ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference <a name="ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import containerengine_virtual_node_pool

containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerengineVirtualNodePoolVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---



